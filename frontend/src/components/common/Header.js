import { useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import withModal from './Modal';
import Create from '../create/Create';

import { Context } from '../../context/AppContext';

import * as uiService from '../../services/ui';
import * as routeService from '../../services/route';
import * as storageService from '../../services/storage';

import * as MENUS from '../../constants/menu';
import * as ROUTES from '../../constants/routes';
import * as STORAGE_KEYS from '../../constants/storage-keys';
import logo from '../../images/Logo.png';
import logo2 from '../../images/Logo 2.png';

const Header = ({ toggleModal }) => {
  const [menu, setMenu] = useState(MENUS.HOMES);
  const location = useLocation();

  const { user, setUser, cometChat } = useContext(Context);

  const history = useHistory();

  const home = () => {
    uiService.showDarkHeader();
    routeService.navigate({ route: ROUTES.HOME, push: history.push });
  };

  const profile = () => {
    uiService.showLightHeader();
    routeService.navigate({ route: ROUTES.PROFILE, push: history.push });
    storageService.save({ key: STORAGE_KEYS.PROFILE, payload: JSON.stringify(user) });
  };

  const changeMenu = (menu) => () => {
    setMenu(() => menu);
  };

  const chat = () => {
    uiService.showLightHeader();
    routeService.navigate({ route: ROUTES.CHAT, push: history.push });
  };

  const create = () => {
    toggleModal(true);
  };

  const logout = async () => {
    const isLogout = window.confirm('Do you want to log out ?');
    if (isLogout) {
      await logoutCometChat();
      removeAuthedInfo();
      routeService.navigate({ route: ROUTES.LOGIN, push: history.push });
    }
  };

  const logoutCometChat = async () => {
    await cometChat.logout();
  };

  const removeAuthedInfo = () => {
    setUser(null);
    storageService.remove(STORAGE_KEYS.AUTH);
  };

  if (!user) return <></>;

  return (
    <div id="header" className="header">
      <div id="header-left" className="header__left">
        <img
          crossorigin="anonymous"
          onClick={home}
          style={{ display: 'block' }}
          src={location.pathname === '/profile' ? logo2 : logo}
        ></img>
        {user && (
          <div id="header-right" className="header__right" onClick={profile}>
            <div className="header__image-wrapper">
              <img crossorigin="anonymous" src={user.avatar} alt={user.email} />
            </div>
            <span>Hello, {user.fullname}</span>
          </div>
        )}
      </div>
      <div className="header__actions">
        <span className="header__action" onClick={chat}>
          <span>Chat</span>
        </span>
        <span className="header__action" onClick={create}>
          <span>Create</span>
        </span>
        <span className="header__action" onClick={logout}>
          <span>Logout</span>
        </span>
      </div>
    </div>
  );
};

export default withModal(Create)(Header);

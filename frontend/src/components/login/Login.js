import { useEffect, useRef, useContext } from 'react';
import validator from 'validator';
import { useHistory } from 'react-router-dom';
import withModal from '../common/Modal';
import SignUp from '../register/SignUp';
import { Context } from '../../context/AppContext';
import * as cometChatService from '../../services/cometchat';
import * as firebaseService from '../../services/firebase';
import * as routeService from '../../services/route';
import * as storageService from '../../services/storage';
import * as uiService from '../../services/ui';

import * as FIREBASE_KEYS from '../../constants/firebase-keys';
import * as ROUTES from '../../constants/routes';
import * as STORAGE_KEYS from '../../constants/storage-keys';
import logo from './Logo.png';

const Login = (props) => {
  const { toggleModal } = props;

  const { cometChat, setUser } = useContext(Context);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const history = useHistory();

  useEffect(() => {
    const authedUser = JSON.parse(storageService.get(STORAGE_KEYS.AUTH));
    if (authedUser) {
      routeService.navigate({ route: ROUTES.HOME, push: history.push });
    } else {
      setUser(null);
    }
  }, [history, setUser]);

  const login = async () => {
    console.log('passed');

    try {
      uiService.showLoading();
      const { email, password } = getInputs();
      if (isUserCredentialsValid(email, password)) {
        await firebaseService.login(email, password);
        console.log('passed 1');
        const user = await firebaseService.getData({
          key: FIREBASE_KEYS.USERS,
          query: FIREBASE_KEYS.EMAIL,
          criteria: email,
        });
        console.log('passed');
        await cometChatService.login({ cometChat, user });
        console.log('passed');
        saveAuthedInfo(user);
        uiService.hideLoading();
        routeService.navigate({ route: ROUTES.HOME, push: history.push });
      } else {
        uiService.hideLoading();
        uiService.alert(`Your user's name or password is not correct`);
      }
    } catch (error) {
      uiService.hideLoading();
    }
  };

  const getInputs = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    return { email, password };
  };

  const isUserCredentialsValid = (email, password) => {
    return validator.isEmail(email) && password;
  };

  const saveAuthedInfo = (user) => {
    setUser(user);
    storageService.save({ key: STORAGE_KEYS.AUTH, payload: JSON.stringify(user) });
  };

  return (
    <div className="login__container ">
      <div className="login__welcome">
        <div className="login__logo">
          <img crossorigin="anonymous" src={logo} alt="logo" />
        </div>
        <p>Easy Booking A Vehicle With </p><p style={{ color: "#FF385C", fontWeight: 'bold' }}>Vehicle Rentals</p>

      </div>
      <div className="login__form-container">
        <div className="login__form">
          <input type="text" placeholder="Email or phone number" ref={emailRef} />
          <input type="password" placeholder="Password" ref={passwordRef} />
          <button className="login__submit-btn" onClick={login}>
            Login
          </button>
          <span className="login__forgot-password">Forgot password?</span>
          <span className="login__signup" onClick={() => toggleModal(true)}>
            Create New Account
          </span>
        </div>
      </div>
    </div>
  );
};

export default withModal(SignUp)(Login);

import { useState, useEffect, useCallback } from 'react';


import ProfileLeft from './ProfileLeft';
import ProfileIntro from './ProfileIntro';
import ProfileCars from './ProfileCars';

import * as uiService from '../../services/ui';
import * as storageService from '../../services/storage';

import * as STORAGE_KEYS from '../../constants/storage-keys';

const Profile = () => {
  const [profile, setProfile] = useState(null);


  const loadProfile = useCallback(() => {
    const profile = JSON.parse(storageService.get(STORAGE_KEYS.PROFILE));
    if (profile) {
      setProfile(() => profile);
    }
  }, []);



  useEffect(() => {
    window.onload = function () {
      uiService.showLightHeader();
    }
    loadProfile();

  }, [loadProfile]);

  if (!profile) return <></>;

  return (
    <div className="profile">
      <ProfileLeft profile={profile} />
      <div className="profile__right">
        <ProfileIntro profile={profile} />
        <div className="profile__divider"></div>
        <h3>{profile.fullname}'s car/room for rent</h3>
        <ProfileCars profile={profile} />
      </div>
    </div>
  );
};

export default Profile;
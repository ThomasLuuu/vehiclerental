import { useState, useEffect, useRef, useCallback } from 'react';
import { useHistory } from 'react-router';

import ProfileCar from './ProfileCar';

import * as firebaseService from '../../services/firebase';
import * as routeService from '../../services/route';
import * as storageService from '../../services/storage';
import * as uiService from '../../services/ui';

import * as FIREBASE_KEYS from '../../constants/firebase-keys';
import * as ROUTES from '../../constants/routes';
import * as STORAGE_KEYS from '../../constants/storage-keys';

const ProfileCars = ({ profile }) => {
  const [cars, setCars] = useState([]);

  const carsRef = useRef(firebaseService.getRef(FIREBASE_KEYS.CARS));
  const tempRef = carsRef.current;

  const history = useHistory();

  const loadCars = useCallback(() => {
    firebaseService.getDataRealtimeQuery({ ref: carsRef, query: FIREBASE_KEYS.CREATED_BY, criteria: profile.id, callback: onDataLoaded });
  }, [carsRef, profile]);

  const onDataLoaded = val => {
    if (val) {
      const keys = Object.keys(val);
      const data = keys.map(key => val[key]);
      setCars(() => data);
    }
  };

  useEffect(() => {
    const keywords = storageService.get(STORAGE_KEYS.KEYWORD);
    if (keywords) {
      loadCars(keywords);
    }
  }, [loadCars]);

  useEffect(() => {
    return () => {
      setCars(() => []);
      tempRef.off();
    };
  }, [tempRef]);

  const onItemClicked = car => () => {
    uiService.showLightHeader();
    storageService.save({ key: STORAGE_KEYS.CAR, payload: JSON.stringify(car) });
    routeService.navigate({ route: ROUTES.DETAIL, push: history.push });
  };

  if (!cars || !cars.length) return <></>;

  return (
    <div className="profile__cars">
      {cars.map(car => <ProfileCar key={car} car={car} onItemClicked={onItemClicked} />)}
    </div>
  );
};

export default ProfileCars;
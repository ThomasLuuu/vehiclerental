import { useState, useEffect, useRef, useCallback } from 'react';

import Cars from '../cars/Cars';

import * as uiService from '../../services/ui';
import * as FIREBASE_KEYS from '../../constants/firebase-keys';
import * as firebaseService from '../../services/firebase';
import * as STORAGE_KEYS from '../../constants/storage-keys';
import * as storageService from '../../services/storage';

const SearchResults = () => {
  const [cars, setCars] = useState();

  const carsRef = useRef(firebaseService.getRef(FIREBASE_KEYS.CARS));
  const tempRef = carsRef.current;

  const loadCars = useCallback(keywords => {
    firebaseService.getDataRealtimeQuery({ ref: carsRef, query: FIREBASE_KEYS.ADDRESS, criteria: keywords, callback: onDataLoaded });
  }, [carsRef]);

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
      loadCars(() => []);
      tempRef.off();
    };
  }, [tempRef]);

  useEffect(() => {
    window.onload = function () {
      uiService.showLightHeader();
    }
  }, []);

  return (
    <div className="search-results">
      <Cars cars={cars} />
    </div>
  );
};

export default SearchResults;
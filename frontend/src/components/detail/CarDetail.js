import { useState, useEffect, useCallback } from 'react';

import CarDetailDescription from './CarDetailDescription';
import CarDetailForm from './CarDetailForm';
import CarDetailImages from './CarDetailImages';
import CarDetailName from './CarDetailName';
import CarDetailSub from './CarDetailSub';

import * as uiService from '../../services/ui';
import * as storageService from '../../services/storage';

import * as STORAGE_KEYS from '../../constants/storage-keys';

const CarDetail = () => {
  const [car, setCar] = useState(null);

  const loadCar = useCallback(() => {
    const car = JSON.parse(storageService.get(STORAGE_KEYS.CAR));
    if (car) {
      setCar(() => car);
    }
  }, []);

  useEffect(() => {
    window.onload = function () {
      uiService.showLightHeader();
    }
    loadCar();
  }, [loadCar]);

  if (!car) return <></>;

  return (
    <div className="car-detail">
      <CarDetailName car={car} />
      <CarDetailSub car={car} />
      <CarDetailImages car={car} />
      <div className="car-detail__body">
        <CarDetailDescription car={car} />
        <CarDetailForm car={car} />
      </div>
    </div>
  );
};

export default CarDetail;
import { useState, useEffect } from 'react';

import Car from './Car';

import * as storageService from '../../services/storage';
import * as STORAGE_KEYS from '../../constants/storage-keys';

const Cars = ({ cars }) => {
  const [keyword, setKeyword] = useState(null);

  useEffect(() => {
    const keyword = storageService.get(STORAGE_KEYS.KEYWORD);
    if (keyword) {
      setKeyword(() => keyword);
    }
  }, []);

  if (!cars || !cars.length) return <></>;

  return (
    <div className="cars">
      {cars.map(car => <Car key={car.id} car={car} keyword={keyword} />)}
    </div>
  );
};

export default Cars;
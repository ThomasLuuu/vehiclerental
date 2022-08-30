import { useHistory } from 'react-router';

import * as uiService from '../../services/ui';

import * as routeService from '../../services/route';
import * as ROUTES from '../../constants/routes';

import * as storageService from '../../services/storage';
import * as STORAGE_KEYS from '../../constants/storage-keys';

const Car = ({ car, keyword }) => {
  const history = useHistory();

  const view = () => {
    uiService.showLightHeader();
    storageService.save({ key: STORAGE_KEYS.CAR, payload: JSON.stringify(car) });
    routeService.navigate({ route: ROUTES.DETAIL, push: history.push });
  }

  if (!car) return <></>;
  
  return (
    <div className="car" onClick={view}>
      <img src={car.image} alt="car" />
      <div className="car__info">
        <p className="car__title">Private vehicle at {keyword}</p>
        <p className="car__name">{car.name}</p>
        <div className="car__divider"></div>
        <p className="car__description">{car.description}</p>
        <div className="car__rating">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: "14px", width: "14px" }}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg>
          <span>4.82</span>
        </div>
        <div className="car__price">
          <span className="car__price-value">{car.price}$</span>
          <span> / day</span>
        </div>
      </div>
    </div>
  );
};

export default Car;
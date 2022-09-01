import { useState, useRef, useContext } from 'react';
import validator from 'validator';
import { v4 as uuidv4 } from 'uuid';

import { Context } from '../../context/AppContext';

import * as firebaseService from '../../services/firebase';
import * as uiService from '../../services/ui';

import * as FIREBASE_KEYS from '../../constants/firebase-keys';

const Create = ({ toggleModal }) => {
  const [imageToCar, setImageToCar] = useState(false);

  const addressRef = useRef(null);
  const descriptionRef = useRef(null);
  const filePickerRef = useRef(null);
  const nameRef = useRef(null);
  const priceRef = useRef(null);

  const { user } = useContext(Context);

  const addImageToCar = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToCar(readerEvent.target.result);
    };
  };

  const create = () => {
    try {
      const { name, price, address, description } = getInputs();
      if (isValid({ name, price, address, description })) {
        uiService.showLoading();
        const id = uuidv4();
        const createdBy = user.id;
        const ownerName = user.fullname;
        const ownerImage = user.avatar;
        const createdCar = { id, createdBy, name, price, description, address, ownerName, ownerImage };
        firebaseService.upload({
          key: FIREBASE_KEYS.CARS,
          id,
          payload: imageToCar,
          entity: createdCar,
          callback: onImageUploaded,
        });
        uiService.hideLoading();
        toggleModal(false);
      }
    } catch (error) {
      uiService.alert('Cannot create your car, please try again!');
      uiService.hideLoading();
    }
  };

  const getInputs = () => {
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const address = addressRef.current.value;
    const description = descriptionRef.current.value;
    return { name, price, address, description };
  };

  const isValid = ({ name, price, address, description }) => {
    if (validator.isEmpty(name)) {
      uiService.alert('Please input the name');
      return false;
    }
    if (!validator.isNumeric(price)) {
      uiService.alert('Please input the price');
      return false;
    }
    if (validator.isEmpty(address)) {
      uiService.alert('Please input the address');
      return false;
    }
    if (validator.isEmpty(description)) {
      uiService.alert('Please input the description');
      return false;
    }
    return true;
  };

  const onImageUploaded = async (entity, url) => {
    entity.image = url;
    await firebaseService.insert({ key: FIREBASE_KEYS.CARS, id: entity.id, payload: entity });
  };

  return (
    <div className="create">
      <div className="create__content">
        <div className="create__container">
          <div className="create__title">Create</div>
          <div className="create__close">
            <img
              crossorigin="anonymous"
              alt="close"
              onClick={() => toggleModal(false)}
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png"
            />
          </div>
        </div>
        <div className="create__subtitle"></div>
        <div className="create__form">
          {!imageToCar && (
            <div className="create__upload" onClick={() => filePickerRef.current.click()}>
              Choose Car Image
            </div>
          )}
          {imageToCar && (
            <div className="create__image">
              <img crossorigin="anonymous" src={imageToCar} alt="car" onClick={() => filePickerRef.current.click()} />
            </div>
          )}
          <input type="file" hidden ref={filePickerRef} className="create__file" onChange={addImageToCar} />
          <input type="text" placeholder="Name" ref={nameRef} />
          <input type="text" placeholder="Price" ref={priceRef} />
          <input type="text" placeholder="Address" ref={addressRef} />
          <input type="text" placeholder="Description" ref={descriptionRef} />
          <button className="create__btn" onClick={create}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;

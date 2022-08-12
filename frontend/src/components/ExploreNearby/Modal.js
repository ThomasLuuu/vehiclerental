import React from "react";

export default function ModalFilter({visible, onClose}) {
    const handleOnClose = (e) =>{
        if (e.target.id === 'container') onClose();
    };
    if(!visible) return null;
 
  return (
    <div id ='container' onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-2 rounded w-72">
        <h1 className="font-semibold text-center text-xl text-gray-700">
          Filters
        </h1>
        {/* <p className="text-center text-gray-700 mb-5">   </p> */}

        <div className="flex flex-col">
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="Location"
          />
          <label for="type" className ="text-center text-gray-700">Vehicle Type</label>
    <select name="type" id="type">
       <option value="7 seater car">7 seater car</option>
       <option value="5 seater car">5 seater car</option>
       <option value="Coupe">Coupe</option>
       <option value="Motobike">Motobike</option>
       <option value="Bicycle ">Bicycle </option>
    </select>

    <label for="color" className ="text-center text-gray-700">Color</label>
    <select name="color" id="color">
       <option value="Black">Black</option>
       <option value="White">White</option>
       <option value="Red">Red</option>
       <option value="Pink">Pink</option>
       <option value="Blue">Blue</option>
       <option value="Orange">Orange</option>
       <option value="Green">Green</option>
       <option value="Grey">Grey </option>
       <option value="Purple">Purple</option>
       <option value="Yellow">Yellow</option>
    </select>
    <label for="brand" className ="text-center text-gray-700">Brand</label>
    <select name="brand" id="brand">
       <option value="Mercedes">Mercedes</option>
       <option value="BMW">BMW</option>
       <option value="Honda">Honda</option>
       <option value="Audi">Audi</option>
       <option value="Toyota">Toyota</option>
       <option value="Ford">Ford</option>
       <option value="Yamaha">Yamaha</option>
       <option value="Hyundai">Hyundai </option>
       <option value="Vinfast">Vinfast</option>
       <option value="Mazda">Mazda</option>
    </select>

        </div>
        <div className="text-center">
          <button className="px-5 py-2 bg-gray-700 text-white rounded">
            Sort
          </button>
        </div>
      </div>
    </div>
  );
}
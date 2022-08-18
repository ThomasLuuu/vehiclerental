import React, {useState, useEffect} from 'react';
import './LiveAnywhere.css';
import Dummy_Data from './dummydata.json'
import { Post } from './Post.js';
import { Title } from './Title.js';

const LiveAnywhere = () => {
  const[vehicles, setVehicles] = useState([])
  
  useEffect(() =>{
    fetch(`http://localhost:5000/api/vehicle`)
      .then(res=>res.json())
      .then(json=>{
        console.log(json.vehicles)
        json.vehicles.map((v)=>{console.table(v)})
        setVehicles(json.vehicles)
      })
  })
  return (
    <>
      <Title />
      {
        vehicles.map((data)=>{
          for (let i = 1; i <= 15; i++){
            let remainder = i % 4;
            if (remainder === 0) remainder = 4;
            let price_value = "$"+data.price;
            return <Post key={data._id} loc={data.url} name={data.name} rating={data.rating} type={data.version} color={data.color} price={price_value}/>;
          }
        })
      }
    </>
  );
};

export default LiveAnywhere;

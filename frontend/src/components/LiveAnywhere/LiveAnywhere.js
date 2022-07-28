import React from 'react';
import './LiveAnywhere.css';
import Dummy_Data from './dummydata.json'
import { Post } from './Post.js';
import { Title } from './Title.js';

const LiveAnywhere = () => {
  return (
    <>
      <Title />
      {
        Dummy_Data.map((data)=>{
          for (let i = 1; i <= 15; i++){
            let remainder = i % 4;
            if (remainder === 0) remainder = 4;
            let price_value = "$"+data.price;
            return <Post key={data.index} loc={require('../../img/Img' + remainder.toString() + '.jpg')} name={data.name} rating={data.rating} type={data.type} color={data.color} price={price_value}/>;
          }
        })
      }
    </>
  );
};

export default LiveAnywhere;

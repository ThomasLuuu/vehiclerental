import React from 'react';
import './LiveAnywhere.css';
import {Img} from './Img.js';
import {Title} from './Title.js';

const rows = [];
for (let i = 1; i <= 4; i++){
  rows.push(<Img loc={require('../../img/Img' + i.toString() + '.jpg')} />)
}
console.log(rows);

export const LiveAnywhere = () => {
  return (
    <>
      <Title />
      {rows}
    </>
  );
};

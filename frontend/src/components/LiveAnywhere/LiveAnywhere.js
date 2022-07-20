import React from 'react';
import './LiveAnywhere.css';
import { Img } from './Img.js';
import { Title } from './Title.js';

const rows = [];
for (let i = 1; i <= 24; i++) {
  let remainder = i % 4;
  if (remainder === 0) remainder = 4;
  rows.push(<Img loc={require('../../img/Img' + remainder.toString() + '.jpg')} />);
}
console.log(rows);

const LiveAnywhere = () => {
  return (
    <>
      <Title />
      {rows}
    </>
  );
};

export default LiveAnywhere;

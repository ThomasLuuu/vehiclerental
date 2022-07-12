import React from 'react';
import './LiveAnywhere.css';

const Title = () => {
  return (
    <div className="title">
      <h1>Live Anywhere</h1>
    </div>
  );
};

const Img = ({loc}) => {
  return (
    <div className="container" style={{margin: '20px'}}>
      <img src={loc} alt="" className="img" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-arrow-right-circle-fill icon"
        viewBox="0 0 16 16"
      >
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
      </svg>
    </div>
  );
};

const rows = [];
for (let i = 1; i <= 12; i++){
  let j = i% 4;
  if (j == 0) {
    j += 4;
  }
  rows.push(<Img loc={require('../img/Img' + j.toString() + '.jpg')} />)
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

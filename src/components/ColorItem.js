import React from 'react';

const ColorItem = ({ color, setColor }) => {
  return (
    <div
      className='color_item'
      style={{ '--bg-color': color }}
      onClick={setColor}
    ></div>
  );
};

export default ColorItem;

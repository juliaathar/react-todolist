import React from 'react';
import "./Title.css";

const Title = ({text}) => {
  return (
    <div>
      <h1 className='title'>{text}</h1>
    </div>
  );
};

export default Title;

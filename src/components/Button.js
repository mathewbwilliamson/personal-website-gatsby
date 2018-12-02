import React from 'react';
import './Button.css';

const ButtonComp = (props) => {
  return (
    <div className='btnDiv'>
      <a className="isometric" href={props.buttonLink}  target='_blank'>
        <button type='submit' className="btnttl">{props.buttonText}</button>
      </a>
    </div>
  );
};

export default ButtonComp;

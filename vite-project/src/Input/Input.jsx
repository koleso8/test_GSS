import React from 'react';
import s from './Input.module.css';

const Input = ({ style, type, placeholder, width }) => {
  let height;
  let fontSize;
  let widthInp = width || '240px';

  switch (style) {
    case 'xs':
      height = '24px';
      fontSize = '12px';
      break;
    case 'sm':
      height = '36px';
      fontSize = '14px';
      break;
    case 'lg':
      height = '40px';
      fontSize = '14px';
      break;
    case 'xl':
      height = '48px';
      fontSize = '16px';
      break;
  }

  return (
    <div>
      <input
        className={s.xl}
        type={type}
        placeholder={placeholder}
        style={{
          width: width || widthInp,
          height: width * 0.15 || height,
          fontSize: (width * 0.15) / 2.6 || fontSize,
          paddingLeft: (width * 0.15) / 2.6 || 12,
        }}
      />
    </div>
  );
};

export default Input;

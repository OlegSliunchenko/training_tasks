import React from 'react';

import { IButtonProps } from './type';

import './style.css';

const Button: React.FC<IButtonProps> = ({
  color,
  handleClick,
  buttonSize,
  title,
  disabled = true
}: IButtonProps) => (
  <button
    type="button"
    style={color}
    onClick={handleClick}
    disabled={disabled}
    className={buttonSize}
  >
    {title}
  </button>
);

export default Button;

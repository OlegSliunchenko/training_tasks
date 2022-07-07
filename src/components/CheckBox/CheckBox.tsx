import React from 'react';

import { ButtonSize } from '@utils/enum';

import { ICheckBoxProps } from './type';

const CheckBox: React.FC<ICheckBoxProps> = ({
  buttonSize,
  checkingSize,
  activeButton
}: ICheckBoxProps) => (
  <div>
    <label htmlFor="1">SM Size:</label>
    <input
      checked={buttonSize === ButtonSize.SM_SIZE}
      type="radio"
      id="1"
      name="topping"
      value="SM Size"
      onChange={checkingSize}
    />
    <label htmlFor="2">M Size:</label>
    <input
      checked={buttonSize === ButtonSize.M_SIZE}
      type="radio"
      id="2"
      name="topping"
      value="M Size"
      onChange={checkingSize}
    />
    <label htmlFor="3">XL Size:</label>
    <input
      checked={buttonSize === ButtonSize.XL_SIZE}
      type="radio"
      id="3"
      name="topping"
      value="XL Size"
      onChange={checkingSize}
    />
    <label htmlFor="0">ActiveButton:</label>
    <input
      type="checkbox"
      id="0"
      name="topping"
      value="disabled"
      onChange={activeButton}
    />
  </div>
);

export default CheckBox;

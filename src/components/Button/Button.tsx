import React, {Component} from 'react';

import {ButtonType} from './type';

import './style.css';

class ButtonClassComponent extends Component<ButtonType> {
  render() {
    const {onClick, color, disabled, btnSize, title} = this.props;

    return (
      <button
        onClick={onClick}
        style={color}
        disabled={disabled}
        className={btnSize}
      >
        {title}
      </button>
    );
  }
}

export default ButtonClassComponent;

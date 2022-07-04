import React from 'react';

import {HandlerType} from './type';

class CheckBoxClassComponent extends React.PureComponent<HandlerType> {
  render() {
    const {checking, activateBtn} = this.props;
    return (
      <div>
        <h1>Button size:</h1>
        <div>
          <label>SM Size:</label>
          <input
            type="radio"
            id="1"
            name="topping"
            value="SM Size"
            onChange={checking}
          />
          <label>L Size:</label>
          <input
            type="radio"
            id="2"
            name="topping"
            value="L Size"
            onChange={checking}
          />
          <label>XL Size:</label>
          <input
            type="radio"
            id="3"
            name="topping"
            value="XL Size"
            onChange={checking}
          />
          <label>ActiveButton:</label>
          <input
            type="checkbox"
            id="0"
            name="active"
            value="disabled"
            onChange={activateBtn}
          />
        </div>
      </div>
    );
  }
}

export default CheckBoxClassComponent;

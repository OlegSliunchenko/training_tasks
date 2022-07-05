import React from 'react';

import {ContainerType} from './type';

import './style.css';

class ContainerClassComponent extends React.PureComponent<ContainerType> {
  render() {
    const {children, divStyle} = this.props;

    return <div className={divStyle}>{children}</div>;
  }
}

export default ContainerClassComponent;

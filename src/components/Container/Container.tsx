import React from 'react';

import {ContainerType} from './type';

import './style.css';

class ContainerClassComponent extends React.PureComponent<ContainerType> {
  render() {
    const {children, divStyle} = this.props;
    // FIXME: If you have single element () is redundant
    // FIXME: return <div className={className}>{children}</div>
    // FIXME: or
    // FIXME: return <div className={className}>
    //  {children}
    //  {blah}
    //  {blah-blah}
    //  {blah-blah-blah}
    //  </div>
    return <div className={divStyle}>{children}</div>;
  }
}

export default ContainerClassComponent;

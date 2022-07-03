import React from 'react';
import {ContainerType} from "./type";

class ContainerClassComponent extends React.Component<ContainerType>{
    render() {
        const {children, className} = this.props;
        return (
            <div className={className}>{children}</div>
        );
    };

}

export default ContainerClassComponent;

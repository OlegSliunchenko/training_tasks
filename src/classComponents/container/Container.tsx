import React from 'react';
import {ContainerType} from "../../types/types";

export default class ContainerClassComponent extends React.Component<ContainerType>{
    render() {
        return (
            <div className={this.props.className}>{this.props.children}</div>
        );
    };

};

import React from 'react';
import {ContainerType} from "./type";

export default function Container(props:ContainerType) {
    const {className, children} = props;

    return (
        <div className={className}>{children}</div>
    );
}

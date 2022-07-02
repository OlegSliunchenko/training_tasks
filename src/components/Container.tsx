import React from 'react';
import {ContainerType} from "../types/types";

export default function Container(props:ContainerType) {
    const {className, children} = props;

    return (
        <div className={className}>{children}</div>
    );
}

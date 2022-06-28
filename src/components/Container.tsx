import React from 'react';
import {ContainerType} from "../types/types";

export default function Container(props:ContainerType) {
    return (
        <div className={props.className}>{props.children}</div>
    );
}
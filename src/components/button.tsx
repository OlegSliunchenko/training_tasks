import React from 'react';
import {ButtonType} from "../types/types";

export default function Button(props: ButtonType) {
    return (
        <button onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} id={props.id} type={"button"} style={props.style} onClick={props.onClick} disabled={props.disabled}>
            {props.title}
        </button>
    );
};
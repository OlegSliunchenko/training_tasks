import React from 'react';
import {ButtonType} from "../types/types";
import '../CSS/button.css'

// FIXME: if use have more than two properties prefer use destruction
export default function Button(props: ButtonType) {
// FIXME: why here empty line before?
    return (
        <button
            type={"button"}
            style={props.color}
            onClick={props.onClick}
            disabled={props.disabled}
            className={props.className}
        >
            {props.title}
        </button>
    );
};


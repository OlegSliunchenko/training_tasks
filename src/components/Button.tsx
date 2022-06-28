import React from 'react';
import {ButtonType} from "../types/types";
import '../CSS/button.css'

export default function Button(props: ButtonType) {

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


import React from 'react';
import {ButtonType} from "./type";
import './style.css'

export default function Button(props: ButtonType) {
const {color, onClick, disabled = true, buttonSize, title} = props;

    return (
        <button
            type={"button"}
            style={color}
            onClick={onClick}
            disabled={disabled}
            className={buttonSize}
        >
            {title}
        </button>
    );
}

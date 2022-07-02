import React from 'react';
import {ButtonType} from "../types/types";
import '../CSS/button.css'

export default function Button(props: ButtonType) {
const {color, onClick, disabled, buttonSize, title} = props;

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

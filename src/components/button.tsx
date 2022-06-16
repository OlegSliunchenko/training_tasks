import React from 'react';
// FIXME: you should use module resolver instead of ../../.. and so on.
// FIXME: import { ButtonType } from "@types/types";
// FIXME: you can do it in tsconfig.json
import {ButtonType} from "../types/types";

// FIXME: you should tell TS what type React.FC
// FIXME: use spread operator - if you have two props it's ok
// FIXME: but you have -  props.onMouseEnter props.onMouseLeave props.id props.style props.onClick props.disabled props.title
// FIXME: match better -  onMouseEnter onMouseLeave id style onClick disabled title

export default function Button(props: ButtonType) {
    return (
        // FIXME: if component has many props use format <Component and all props from new line. Because it's hard to read
        <button onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} id={props.id} type={"button"} style={props.style} onClick={props.onClick} disabled={props.disabled}>
            {props.title}
        </button>
    );
};

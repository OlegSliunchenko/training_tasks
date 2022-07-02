import React from "react";

export interface HandlerType  {
    checking: (e:React.ChangeEvent<HTMLInputElement>)=>void;
}
export type InputColorType = {
    handler:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    value:string,
}
export type StyleType = {
    backgroundColor: string,
}
export interface ButtonType {
    title: string;
    color: StyleType;
    onClick?: () => void; // FIXME: It must accept - title, color, and handler.
    disabled?: boolean; //FIXME: It could accept - size and disable properties. What will be if i not pass this props? undefined? null? false?
    buttonSize: string;
}
export type ContainerType = {
    className: string;
    children?: React.ReactNode;
}

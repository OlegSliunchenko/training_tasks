import React from "react";

export interface HandlerType  {
    checking: (e:React.ChangeEvent<HTMLInputElement>)=>void;
}
export type InputColorType = {
    handler:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    value:string,
}
export interface StyleType  {
    backgroundColor: string,
}
export interface ButtonType {
    title: string;
    color: StyleType;
    onClick?: () => void;
    disabled?: boolean;
    className: string;
}
export type ContainerType = {
    className: string;
    children?: React.ReactNode;
}

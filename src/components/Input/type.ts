import React from "react";

export interface InputColorType {
    handler:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    value:string,
}

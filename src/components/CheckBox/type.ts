import React from "react";

export interface HandlerType  {
    checkingSize: (e:React.ChangeEvent<HTMLInputElement>)=>void;
    activeButton: (e:React.ChangeEvent<HTMLInputElement>)=>void;
}

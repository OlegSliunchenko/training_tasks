import React from "react";

export interface HandlerType  {
    checking: (e:React.ChangeEvent<HTMLInputElement>)=>void;
}

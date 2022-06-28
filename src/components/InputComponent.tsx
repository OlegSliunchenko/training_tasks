import {HandlerType, InputColorType} from "../types/types";

export default function InputComponent({handler, value}: InputColorType) {
    return (
        <div>
            <label>Enter color:</label>
            <input type={"text"} onChange={handler} value={value}/>
        </div>
    );
};
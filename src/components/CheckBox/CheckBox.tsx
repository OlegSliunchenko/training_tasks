import React from "react";
import {HandlerType} from "./type";

export default function InboxButtonSize({checkingSize, activeButton}: HandlerType) {

    return (
        <div>
            <h1>Button size:</h1>
            <div>
                <label>SM Size:</label>
                <input type="radio" id="1" name="topping" value="SM Size" onChange={checkingSize}/>
                <label>L Size:</label>
                <input type="radio" id="2" name="topping" value="L Size" onChange={checkingSize}/>
                <label>XL Size:</label>
                <input type="radio" id="3" name="topping" value="XL Size" onChange={checkingSize}/>
                <label>ActiveButton:</label>
                <input type="checkbox" id="0" name="topping" value="disabled" onChange={activeButton}/>
            </div>
        </div>
    );
}

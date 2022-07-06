import React from 'react';
import './style.css'
import {CheckBoxType} from "./type";

export default function CheckBox({checkBoxHandler}:CheckBoxType) {

    return (
        <div>
            <h1>Choose Your InputField type!?</h1>
            <label>
                Inline Input!
                <input type={'radio'} name="topping" value="inline"  id={'1'} onChange={checkBoxHandler}/>
            </label>
            <label>
                Text area!
                <input type={'radio'} name="topping" value="area" id={'2'} onChange={checkBoxHandler}/>
            </label>
        </div>
    );
}

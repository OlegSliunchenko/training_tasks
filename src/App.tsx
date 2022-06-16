import React, {useState} from 'react';
import './App.css';
import Button from "./components/button";
import {StyleType} from "./types/types";


function App(this: any) {

    // VARIABLES

    let ButtonTitle = 'SMALL BUTTON';
    let STYLE: StyleType = {
        backgroundColor: 'red',
        width: 90,
        height: 50,
    };


    // STATES

    let [disabled, setDisabled] = useState(false);
    let [styleSet, setStyle] = useState(STYLE);

    // HANDLERS

    let ButtonHandler = () => {
        setStyle(styleSet => {
            let STYLE = {...styleSet};
            if (STYLE.backgroundColor === 'red') {
                STYLE.backgroundColor = 'blue';
            } else {
                STYLE.backgroundColor = 'red'
            }
            return STYLE
        });
    };

    return (
        <div className="App">
            <Button id={'test'}  onMouseEnter={() => setDisabled(true)} onMouseLeave={() => setDisabled(false)} title={ButtonTitle} disabled={disabled} onClick={ButtonHandler}
                    style={styleSet}/>
        </div>
    );
}

export default App;

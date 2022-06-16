import React, {useState} from 'react';
import './App.css';
import Button from "./components/button";
import {StyleType} from "./types/types";


function App(this: any) {

    // VARIABLES

    // FIXME: why let? why PascalCase? It's class? Object?
    let ButtonTitle = 'SMALL BUTTON';
    // FIXME: why let? why all caps? It's const value like const SOME_CONST = ... ?
    let STYLE: StyleType = {
        backgroundColor: 'red',
        // FIXME: 90px? 90em? 90mm?
        width: 90,
        height: 50,
    };


    // STATES

    let [disabled, setDisabled] = useState(false);
    let [styleSet, setStyle] = useState(STYLE);

    // HANDLERS

    // FIXME: why let? why PascalCase? It's class? Object?
    let ButtonHandler = () => {
        setStyle(styleSet => {
            // FIXME: why let? why all caps letter? It's class? Object?
            let STYLE = {...styleSet};
            if (STYLE.backgroundColor === 'red') {
                STYLE.backgroundColor = 'blue';
            } else {
                STYLE.backgroundColor = 'red'
            }
            return STYLE
        });
        // FIXME: it could be simplified. Pls read about spread & rest operations
        setStyle(styleSet => ({
            ...styleSet,
            backgroundColor: styleSet.backgroundColor === 'red' ? 'blue' : 'red'
        }));
    };

    return (
        <div className="App">
            {/*FIXME: if component has many props use format <Component and all props from new line. Because it's hard to read. Like this*/}
            <Button
                id={'test'}
                onMouseEnter={() => setDisabled(true)}
                onMouseLeave={() => setDisabled(false)}
                title={ButtonTitle}
                disabled={disabled}
                onClick={ButtonHandler}
                style={styleSet}
            />
            <Button id={'test'} onMouseEnter={() => setDisabled(true)} onMouseLeave={() => setDisabled(false)}
                    title={ButtonTitle} disabled={disabled} onClick={ButtonHandler}
                    style={styleSet}/>
        </div>
    );
}

export default App;

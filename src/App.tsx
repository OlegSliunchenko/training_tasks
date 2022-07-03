import React, {useState} from 'react';
import './App.css';
import {Button, CheckBox, Container} from './components';
import {ButtonSize} from "./utils/enum";
import {HuePicker} from "react-color";

function App() {
    type color = {
        hex: string
    }
    const [buttonSize, setButtonSize] = useState('sm_size');
    const [btnState, setState] = useState(true);
    const [btnColor, setBtnColor] = useState({backgroundColor: '#fff'});
    const colorHandler = (color: color) => {
        setBtnColor({backgroundColor: color.hex})
    };
    const handler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked && event.target.id === '1') {
            setButtonSize(ButtonSize.small);
        } else if (event.target.checked && event.target.id === "2") {
            setButtonSize(ButtonSize.large);
        } else if (event.target.checked && event.target.id === "3") {
            setButtonSize(ButtonSize.XL_size);
        } else if (event.target.checked && event.target.id === "0") {
            setState(!btnState);
        } else if (!event.target.checked && event.target.id === "0") {
            setState(!btnState);
        }
    };

    return (
        <Container className="App">
            <CheckBox checking={handler}/>
            <HuePicker
                color={btnColor.backgroundColor}
                onChangeComplete={colorHandler}
            />
            <Button
                color={btnColor}
                buttonSize={buttonSize}
                title={'Button'}
                onClick={() => {
                }}
                disabled={btnState}
            />
        </Container>
    );
}

export default App;

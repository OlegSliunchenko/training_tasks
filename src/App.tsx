import React, {useState} from 'react';
import './App.css';
import ContainerClassComponent from "./classComponents/container/Container";
import CheckBoxClassComponent from "./classComponents/checkBox/CheckBox";
import ButtonClassComponent from "./classComponents/button/Button";
import InputClassComponent from "./classComponents/input/InputComponent";



function App() {
    const [buttonSize, setButtonSize] = useState('sm_size');
    const [btnState, setState] = useState(true);
    const [color, setColor] = useState({backgroundColor: 'red',})
    const colorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newColor = {...color};
        let {value} = e.target;
        newColor.backgroundColor= value;
        setColor(newColor)
    }

    const handler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked && event.target.id === '1') {
            setButtonSize( "sm_size");
        } else if (event.target.checked && event.target.id === "2") {
            setButtonSize("l_size");
        } else if (event.target.checked && event.target.id === "3") {
            setButtonSize("xl_size");
        } else if (event.target.checked && event.target.id === "0") {
            setState(!btnState);
        } else if (!event.target.checked && event.target.id === "0") {
            setState(!btnState);
        }
    }
    return (
        <ContainerClassComponent className="App">

            <CheckBoxClassComponent checking={handler}/>
            <InputClassComponent handler={colorHandler} value={color.backgroundColor}/>
            <ButtonClassComponent
                color={color}
                className={buttonSize}
                title={'Button'}
                onClick={() => {
                }}
                disabled={btnState}/>
        </ContainerClassComponent>
    );
}

export default App;

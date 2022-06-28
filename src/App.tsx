import React, {useState} from 'react';
import './App.css';
import Container from "./components/Container";
import InboxButtonSize from "./components/CheckBox";
import Button from "./components/Button";
import InputComponent from "./components/InputComponent";


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
        <Container className="App">

            <InboxButtonSize checking={handler}/>
            <InputComponent handler={colorHandler} value={color.backgroundColor}/>
            <Button
                color={color}
                className={buttonSize}
                title={'Button'}
                onClick={() => {
                }}
                disabled={btnState}/>
        </Container>
    );
}

export default App;

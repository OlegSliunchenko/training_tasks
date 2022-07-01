import React, {useState} from 'react';
// FIXME: use tsconfig to create module system
// FIXME: and than use @components/blahBlah
import './App.css';
import Container from "./components/Container";
import InboxButtonSize from "./components/CheckBox";
import Button from "./components/Button";
import InputComponent from "./components/InputComponent";


function App() {
    // FIXME: SM_size | SM_siZe | SM_sise | SM_Size | sm_Size | sm_siZE
    // FIXME: what variant is correct?
    const [buttonSize, setButtonSize] = useState('sm_size');
    const [btnState, setState] = useState(true);
    // FIXME: comma inside?
    const [color, setColor] = useState({backgroundColor: 'red',}) // FIXME: semicolon????
    const colorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newColor = {...color};
        let {value} = e.target;
        newColor.backgroundColor= value;
        setColor(newColor)
    }
    // FIXME: empty line, why?
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
    } // // FIXME: why don't you have an empty line before returning?
    return (
        // FIXME: style name all caps? or not?
        <Container className="App">
            {/*FIXME: empty line, why?*/}
            <InboxButtonSize checking={handler}/>
            <InputComponent handler={colorHandler} value={color.backgroundColor}/>
            <Button
                color={color}
                className={buttonSize}
                title={'Button'}
                onClick={() => {
                }}
                // FIXME: /> must be at the new line
                disabled={btnState}/>
        </Container>
    );
}

export default App;

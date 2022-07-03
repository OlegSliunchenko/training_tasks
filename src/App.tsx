import React, {useState} from 'react';
import './App.css';
// FIXME: you stubbornly don't want to use tsconfig 'path'
import {Button, CheckBox, Container} from "./components";
// FIXME: the absolute import must be before relative

// FIXME: if you use third-party library - read the docs more careful
// FIXME: 'backgroundColor' is not equal 'background'
/*
  state = {
    background: '#fff',
  };

  handleChangeComplete = (color, event) => {
    this.setState({ background: color.hex });
  };

  render() {
    return <PhotoshopPicker onChangeComplete={ this.handleChangeComplete } />;
  }
 */
import {HuePicker} from 'react-color';

// FIXME: pls use class App(){} instead of function App(){}
function App() {
    // FIXME: maybe this library already has types?
    type color = {
        hex: string
    }
    const [buttonSize, setButtonSize] = useState('sm_size');
    const [btnState, setState] = useState(true);
    const [btnColor, setBtnColor] = useState({backgroundColor: '#fff'})
    const colorHandler = (color: color) => {
        setBtnColor({backgroundColor: color.hex})
    }
    const handler = (event: React.ChangeEvent<HTMLInputElement>) => {
        // FIXME: almost right. I believe that the last "else if" is the result of inattention from 'copy paste' method
        // FIXME: But there another issue - this code is not readable
        if (event.target.checked && event.target.id === '1') {
            setButtonSize("sm_size");
        } else if (event.target.checked && event.target.id === "2") {
            setButtonSize("l_size");
        } else if (event.target.checked && event.target.id === "3") {
            setButtonSize("xl_size");
        } else if (event.target.checked && event.target.id === "0") {
            setState(!btnState);
        } else if (!event.target.checked && event.target.id === "0") {
            setState(!btnState);
        }

        // FIXME: what do you think about this approach? I guess it more readable
        /*
        switch (event.target.id) {
            case '1':
                return setButtonSize("sm_size");
            case '2':
                return setButtonSize("l_size");
            case '3':
                return setButtonSize("xl_size");
        }
        // FIXME: you also need to separate the logic sizing and availability
        setState(!btnState);

        if (event.target.id === "0") {
            setState(!btnState);
        }
        */


    }

    return (
        <Container className="App">
            <CheckBox checking={handler}/>

            <HuePicker
                color={btnColor.backgroundColor}
                onChangeComplete={colorHandler}
            />
            <Button
                color={btnColor}
                className={buttonSize}
                title={'Button'}
                onClick={() => {
                }}
                disabled={btnState}
            />
        </Container>
    );
}

export default App;

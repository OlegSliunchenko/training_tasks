import React, {useState} from 'react';
import {ColorResult, HuePicker} from 'react-color';

import {ButtonSizingEnum} from './utils/enum';
import {Button, CheckBox, Container} from './components';

import './App.css';

// FIXME: pls use class App(){} instead of function App(){}
function App() {
  const [buttonSize, setButtonSize] = useState(ButtonSizingEnum.small);
  const [btnState, setState] = useState(true);
  const [btnColor, setBtnColor] = useState({background: '#fff'});
  const colorHandler = (color: ColorResult) => {
    setBtnColor({background: color.hex});
  };
  const sizeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case '1':
        return setButtonSize(ButtonSizingEnum.small);
      case '2':
        return setButtonSize(ButtonSizingEnum.large);
      case '3':
        return setButtonSize(ButtonSizingEnum.xl);
    }
  };
  const activityHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case '0':
        return setState(!btnState);
    }
  };

  return (
    <Container divStyle="App">
      <CheckBox checking={sizeHandler} activateBtn={activityHandler} />
      <HuePicker color={btnColor.background} onChangeComplete={colorHandler} />
      <Button
        color={btnColor}
        btnSize={buttonSize}
        title={'Button'}
        onClick={() => {}}
        disabled={btnState}
      />
    </Container>
  );
}

export default App;

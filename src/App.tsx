import React from 'react';
import {ColorResult, HuePicker} from 'react-color';

import {ButtonSizingEnum} from './utils/enum';
import {Button, CheckBox, Container} from './components';

import './App.css';

type stateType = {
  buttonSize: string;
  btnState: boolean;
  btnColor: object;
};

class App extends React.Component<{}, stateType> {
  state = {
    buttonSize: ButtonSizingEnum.small,
    btnState: true,
    btnColor: {background: '#fff'}
  };
  colorHandler = (color: ColorResult) => {
    this.setState((state: any) => ({
      btnColor: {background: color.hex}
    }));
  };

  sizeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case '1':
        return this.setState((state: stateType) => ({
          buttonSize: ButtonSizingEnum.small
        }));
      case '2':
        return this.setState((state: stateType) => ({
          buttonSize: ButtonSizingEnum.large
        }));
      case '3':
        return this.setState((state: stateType) => ({
          buttonSize: ButtonSizingEnum.xl
        }));
    }
  };

  activityHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === '0') {
      return this.setState((state: stateType) => ({
        btnState: !this.state.btnState
      }));
    }
  };

  render() {
    return (
      <Container divStyle="App">
        <CheckBox
          checking={this.sizeHandler}
          activateBtn={this.activityHandler}
        />
        <HuePicker
          color={this.state.btnColor.background}
          onChangeComplete={this.colorHandler}
        />
        <Button
          color={this.state.btnColor}
          btnSize={this.state.buttonSize}
          title={'Button'}
          onClick={() => {}}
          disabled={this.state.btnState}
        />
      </Container>
    );
  }
}

export default App;

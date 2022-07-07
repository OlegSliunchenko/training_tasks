import React, { useReducer } from 'react';
import { HuePicker } from 'react-color';

import { Button, CheckBox, Container } from '@components';
import { ButtonSize } from '@utils/enum';

import { IAction, IColor, IState } from './type';

import './style.css';

const initialState = {
  buttonSize: ButtonSize.SM_SIZE,
  btnState: true,
  btnColor: { backgroundColor: '#fff' }
};

const reducerFC = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case ButtonSize.SM_SIZE:
      return {
        ...state,
        buttonSize: ButtonSize.SM_SIZE
      };
    case ButtonSize.M_SIZE:
      return {
        ...state,
        buttonSize: ButtonSize.M_SIZE
      };
    case ButtonSize.XL_SIZE:
      return {
        ...state,
        buttonSize: ButtonSize.XL_SIZE
      };
    case 'ActiveButton':
      return {
        ...state,
        btnState: !state.btnState
      };
    case 'color':
      return {
        ...state,
        btnColor: { backgroundColor: action.payload?.hex ?? '#000' }
      };
    default:
      return state;
  }
};

const App = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducerFC, initialState);

  const colorHandler = (color: IColor): void => {
    dispatch({
      type: 'color',
      payload: color
    });
  };

  const handleChangeSize = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    switch (event.target.id) {
      case '1':
        dispatch({ type: ButtonSize.SM_SIZE });
        break;
      case '2':
        dispatch({ type: ButtonSize.M_SIZE });
        break;
      case '3':
        dispatch({ type: ButtonSize.XL_SIZE });
        break;
      default:
        break;
    }
  };

  const handleToggleState = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.id === '0') {
      dispatch({ type: 'ActiveButton' });
    }
  };

  const handleClickButton = (): void => {
    // TODO:
  };

  return (
    <Container className="app">
      <h1>Button size:</h1>
      <CheckBox
        buttonSize={state.buttonSize}
        checkingSize={handleChangeSize}
        activeButton={handleToggleState}
      />
      <HuePicker
        color={state.btnColor.backgroundColor}
        onChangeComplete={colorHandler}
      />
      <Button
        color={state.btnColor}
        buttonSize={state.buttonSize}
        title="Button"
        handleClick={handleClickButton}
        disabled={state.btnState}
      />
    </Container>
  );
};

export default App;

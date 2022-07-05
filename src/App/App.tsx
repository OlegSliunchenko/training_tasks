import React, {useReducer} from 'react';
import {HuePicker} from "react-color";
import './style.css';
import {Button, CheckBox, Container} from '@components';
import {ButtonSize} from "../utils/enum";

import {actionType, color, stateType} from "./type";


function App() {

    const InState = {
        buttonSize: ButtonSize.small,
        btnState: true,
        btnColor: {backgroundColor: '#fff'},
    };
    const reducerFC = (state: stateType, action: actionType) => {
        switch (action.type) {
            case ButtonSize.small:
                return {...state, buttonSize: ButtonSize.small}
            case ButtonSize.large:
                return {...state, buttonSize: ButtonSize.large}
            case ButtonSize.XL_size:
                return {...state, buttonSize: ButtonSize.XL_size}
            case 'ActiveButton':
                return {...state, btnState: !state.btnState}
            case 'color':
                return {...state, btnColor: {backgroundColor: action.payload!.hex}}
            default:
                return state
        }
    };

    const [newState, dispatch] = useReducer(reducerFC, InState)
    const colorHandler = (color: color) => {
        dispatch({
            type: 'color',
            payload: color
        })
    };
    const handler = (event: React.ChangeEvent<HTMLInputElement>) => {
        switch (event.target.id) {
            case '1':
                return dispatch({type: ButtonSize.small});
            case '2':
                return dispatch({type: ButtonSize.large});
            case '3':
                return dispatch({type: ButtonSize.XL_size});
        }
    }
    const activeButton = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.id === "0") {
            dispatch({type: 'ActiveButton'});
        }
    }

    return (
        <Container className="App">
            <CheckBox checkingSize={handler} activeButton={activeButton}/>
            <HuePicker
                color={newState.btnColor.backgroundColor}
                onChangeComplete={colorHandler}
            />
            <Button
                color={newState.btnColor}
                buttonSize={newState.buttonSize}
                title={'Button'}
                onClick={() => {
                }}
                disabled={newState.btnState}
            />
        </Container>
    );
}

export default App;

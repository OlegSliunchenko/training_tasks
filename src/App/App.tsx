import React, {useReducer} from 'react';
import './App.css';
import {CheckBox, Container, Input} from '../components';
import {dispatchType, stateType} from "./type";


function App() {
    const initState = {
        type: '',
        placeholder: ''
    };
const reducer = (state:stateType, action:dispatchType)=>{
    switch (action.type) {
        case 'Inline input':
            return {...state,
                type: 'text',
                placeholder: 'Inline input',
                            }
        case 'Input Area':
            return {...state,
                type: 'TextArea',
                placeholder: 'TextArea'
            }
        default:return state
    }
}
    const checkBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.id) {
            case '1':
                return dispatch({type: 'Inline input'})
            case '2':
                return dispatch({type: 'Input Area'})
        }
    };

    const [newState, dispatch] = useReducer(reducer, initState)

    return (
        <Container className="App">
            <CheckBox checkBoxHandler={checkBoxHandler}/>
            <Input newState = {newState} />
        </Container>
    );
}

export default App;

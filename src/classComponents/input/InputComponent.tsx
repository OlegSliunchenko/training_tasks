import React from 'react';
import {InputColorType} from "../../types/types";

export default class InputClassComponent extends React.Component<InputColorType>{
    render() {
        return (
            <div>
                <label>Enter color:</label>
                <input type={"text"} onChange={this.props.handler} value={this.props.value}/>
            </div>
        );

    };

};

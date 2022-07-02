import React from 'react';
import {InputColorType} from "@components/Input/type";

class InputClassComponent extends React.Component<InputColorType>{
    render() {
        const {handler, value} = this.props;
        return (
            <div>
                <label>Enter color:</label>
                <input type={"text"} onChange={handler} value={value}/>
            </div>
        );

    };

};

export default InputClassComponent;

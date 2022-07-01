import React from 'react';
import {HandlerType} from "../../types/types";

export default class CheckBoxClassComponent extends React.Component<HandlerType> {
    render() {
        return (
            <div>
                <h1>Button size:</h1>
                <div>
                    <label>SM Size:</label>
                    <input type="radio" id="1" name="topping" value="SM Size" onChange={this.props.checking}/>
                    <label>L Size:</label>
                    <input type="radio" id="2" name="topping" value="L Size" onChange={this.props.checking}/>
                    <label>XL Size:</label>
                    <input type="radio" id="3" name="topping" value="XL Size" onChange={this.props.checking}/>
                    <label>ActiveButton:</label>
                    <input type="checkbox" id="0" name="topping" value="disabled" onChange={this.props.checking}/>
                </div>
            </div>
        );
    };
};

import React from 'react';
import {HandlerType} from "./type";

// TODO: Pls read about React.Component vs React.PureComponent
class CheckBoxClassComponent extends React.Component<HandlerType> {
    render() {
        const {checking} = this.props;
        return (
            <div>
                <h1>Button size:</h1>
                <div>
                    <label>SM Size:</label>
                    <input type="radio" id="1" name="topping" value="SM Size" onChange={checking}/>
                    <label>L Size:</label>
                    <input type="radio" id="2" name="topping" value="L Size" onChange={checking}/>
                    <label>XL Size:</label>
                    <input type="radio" id="3" name="topping" value="XL Size" onChange={checking}/>
                    <label>ActiveButton:</label>
                    {/*FIXME: there 'name' must be different. This is not a radio group anymore */}
                    <input type="checkbox" id="0" name="topping" value="disabled" onChange={checking}/>
                </div>
            </div>
        );
    };
}

export default CheckBoxClassComponent;

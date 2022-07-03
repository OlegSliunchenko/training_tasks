import React, {Component} from 'react';
import './style.css'
import {ButtonType} from "./type";

// TODO: Pls read about React.Component vs React.PureComponent
class ButtonClassComponent extends Component<ButtonType> {
    render() {
        const {onClick, color, disabled, className, title} = this.props;
        // FIXME: If you have single element () is redundant
        return (
            <button onClick={onClick}
                    style={color}
                    disabled={disabled}
                    // FIXME: you stubbornly don't want to use an Enum
                    className={className}
            >
                title={title}
            </button>
        );
    };
}

export default ButtonClassComponent;

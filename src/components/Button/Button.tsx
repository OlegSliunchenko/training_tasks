import React, {Component} from 'react';
import '@components/Button/style.css'
import {ButtonType} from "@components/Button/type";

class ButtonClassComponent extends Component<ButtonType> {
    render() {
     const {onClick, color, disabled, className, title} = this.props;

        return (
            <button onClick={onClick}
                    style={color}
                    disabled={disabled}
                    className={className}
            >
                title={title}
            </button>
        );
    };
}

export default ButtonClassComponent;

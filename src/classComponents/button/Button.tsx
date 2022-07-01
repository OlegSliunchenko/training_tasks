import React from 'react';
import {ButtonType} from "../../types/types";
import '../../CSS/button.css'


export default class ButtonClassComponent extends React.Component<ButtonType> {
    render() {

        return (
            <button onClick={this.props.onClick}
                    style={this.props.color}
                    disabled={this.props.disabled}
                    className={this.props.className}
            >
                title={this.props.title}
            </button>
        );
    };
};

import React from 'react';
import {ContainerType} from "./type";

// TODO: Pls read about React.Component vs React.PureComponent
class ContainerClassComponent extends React.Component<ContainerType>{
    render() {
        const {children, className} = this.props;
        // FIXME: If you have single element () is redundant
        // FIXME: return <div className={className}>{children}</div>
        // FIXME: or
        // FIXME: return <div className={className}>
        //  {children}
        //  {blah}
        //  {blah-blah}
        //  {blah-blah-blah}
        //  </div>
        return (
            // FIXME: you uses className
            // FIXME: try to avoid use reserved words - className={className} --> className={containerStyle}
            // FIXME: 'src/components/Container/style.css' is empty, maybe all styles that related to this component
            // FIXME: should be here instead 'src/App.css'
            <div className={className}>{children}</div>
        );
    };

}

export default ContainerClassComponent;

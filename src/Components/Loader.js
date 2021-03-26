import React from 'react';
import { CircularProgress } from '@material-ui/core';
import "./components.css";
export default props => {
    return (
        <div className="loader-wrapper" style={props.style}>
            <div className="inside_loader" >
                <CircularProgress disableShrink />
                <p>{props.msg}</p>
            </div>
        </div>
    )
}
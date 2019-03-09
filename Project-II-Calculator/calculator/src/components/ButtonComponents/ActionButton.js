import React from 'react';
import './Button.css';


const ActionButton = props => {
    return (
        <button className={`${props.className} ${props.background}`}>{props.action}</button>
    );
};

export default ActionButton;
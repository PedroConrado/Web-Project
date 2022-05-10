/*
    This file contains the component of a button with a style that is going to
    repeat through the entire system
*/


import React from 'react';

import './styles.css'


export default function Button({
    style = {},
    orange = false,
    purple = false,
    children,
    onClick = () =>{},
    ...props
}) {
    return(
        <button 
            onClick={onClick}
            style={style}
            className={`button-container ${orange? "background-orange" : ""} ${purple? "background-purple" : ""}`}
        >
            {children}
        </button>
    );
};
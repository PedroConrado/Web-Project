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
    gray = false,
    red = false,
    adminBar = false,
    children,
    onClick = () =>{},
    ...props
}) {
    let classes="button-container background-orange";
    if(purple) classes="button-container background-purple";
    else if(gray) classes="button-container background-lightGray";
    else if(red) classes="button-container background-red";

    if(adminBar) classes+=" button-adminBar";

    return(
        <button 
            onClick={onClick}
            style={style}
            className={classes}
        >
            {children}
        </button>
    );
};
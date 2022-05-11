/*
    This file contains the component of a button with a style that is going to
    repeat through the entire system
*/


import React from 'react';
import {Link} from 'react-router-dom';

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
    link = false,
    to = "/",
    ...props
}) {
    let classes="button-container ";
    if(purple) classes+="background-purple";
    else if(gray) classes+="background-lightGray";
    else if(red) classes+="background-red";
    else classes+="background-orange"

    if(adminBar) classes+=" button-adminBar";

    return(
        <>
        {
            link ?
            <Link 
            className={classes}
            style={style}
            to={to}
            >
                {children}
            </Link>
            :
            <button 
                onClick={onClick}
                style={style}
                className={classes}
            >
                {children}
            </button>
        }
        </>
    );
};
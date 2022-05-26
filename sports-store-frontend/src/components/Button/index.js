/*
    This file contains the component of a button with a style that is going to
    repeat through the entire system
*/


import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css'


export default function Button({
    style = "",
    orange = false,
    purple = false,
    gray = false,
    green = false,
    red = false,
    type="",
    adminBar = false,
    clientBar = false,
    children,
    onClick = () =>{},
    link = false,
    to = "/",
    ...props
}) {
    let classes="button-container " + style;
    if(purple) classes+="background-purple";
    else if(gray) classes+="background-lightGray";
    else if(red) classes+="background-red";
    else if(green) classes+="background-green";
    else classes+="background-orange"

    if(adminBar) classes+=" button-adminBar";
    if(clientBar) classes="button-container button-clientBar";

    return(
        <>
        {
            link ?
            <Link 
            className={classes}
            to={to}
            >
                {children}
            </Link>
            :
            <button 
                onClick={onClick}
                className={classes}
                type={type}
            >
                {children}
            </button>
        }
        </>
    );
};
/*
    This file contains the component of a button with a style that is going to
    repeat through the entire system
*/


import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

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
    const navigate = useNavigate();
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
            <button 
            className={classes}
            onClick={() =>{
                navigate(to);
            }}
            >
                {children}
            </button>
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
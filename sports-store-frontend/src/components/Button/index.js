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
    children,
    onClick = () =>{},
    link = false,
    to = "/",
    ...props
}) {
    return(
        <>
        {
            link ?
            <Link 
            className={`button-container ${orange? "background-orange" : ""} ${purple? "background-purple" : ""}`}
            style={style}
            to={to}
            >
                {children}
            </Link>
            :
            <button 
                onClick={onClick}
                style={style}
                className={`button-container ${orange? "background-orange" : ""} ${purple? "background-purple" : ""}`}
            >
                {children}
            </button>
        }
        </>
    );
};
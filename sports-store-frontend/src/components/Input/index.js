/*
    This file contains a input component whose style is going to be used throught
    the entire system

*/


import React from 'react';

import './styles.css'


export default function Input({
    style = {},
    type = "text",
    filled = false,
    placeholder = "",
    value = "",
    setValue = () => {},
}) {
    return(
        <input
            style={style}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange = {(e) => setValue(e.target.value)}
            
            className={`input ${filled ? "input-filled" : "input-unfilled"}`}
        />
    );
};
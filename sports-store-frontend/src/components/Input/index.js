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
    ...props
}) {
    function onChange(e) {
        if(type === "file" && props.setImage){
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function () {
                props.setImage(reader.result);
                console.log(reader.result);
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
            
        }
        setValue(e.target.value);
    }
    return(
        <input
            style={style}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange = {onChange}
            
            className={`input ${filled ? "input-filled" : "input-unfilled"}`}
        />
    );
};
/*
    This file contains a input component whose style is going to be used throught
    the entire system

*/


import React from 'react';

import './styles.css'
import Input from '../Input';
import ImageContainer from '../ImageContainer';

export default function adminFormRow({
    style = {},
    title = "",
    type = "text",
    placeholder = "",
    value = "",
    filled = true,
    setValue = () => {},
}){
    return(
        <div className='form-input-container'>
            <p className='font-extraBold'>{title}</p>
            <Input
                placeholder={placeholder}
                value={value}
                setValue={setValue}
                filled={filled}
                type={type}
            />
        </div>
    );
};
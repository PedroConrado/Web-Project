/*
    This file contains a input component whose style is going to be used throught
    the entire system

*/


import React from 'react';

import './styles.css'
import Input from '../Input';
import ImageContainer from '../ImageContainer';

export default function FormInput({
    style = {},
    title = "",
    value = "",
    setValue = () => {},
}){
    return(
        <div className='popup-container'>
            <p className='font-extraBold'>{title}</p>
            <Input
                placeholder={placeholder}
                value={value}
                setValue={setValue}
                filled={true}
                type={type}
            />
        </div>
    );
};
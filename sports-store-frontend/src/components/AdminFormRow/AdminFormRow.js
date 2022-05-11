/*
    This file contains a input component whose style is going to be used throught
    the entire system

*/


import React from 'react';

import './AdminFormRowStyles.css'
import Input from '../Input';
import ImageContainer from '../ImageContainer';

export default function adminFormRow({
    style = {},
    title = "",
    type = "text",
    placeholder = "",
    hasImage=false,
    imageSrc="",
    value = "",
    setValue = () => {},
}) {
    if(hasImage){
        return(
            <div className='AdminForm-row'>
                <h5 className='font-extraBold'>{title}</h5>
                <Input
                    placeholder={placeholder}
                    value={value}
                    setValue={setValue}
                    filled={true}
                    type={type}
                />
                <ImageContainer src={imageSrc} alt="noImage"/>
            </div>
        );
    }
    return(
        <div className='AdminForm-row'>
            <h5 className='font-extraBold'>{title}</h5>
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
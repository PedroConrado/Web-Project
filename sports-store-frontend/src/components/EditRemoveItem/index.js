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
    name = "",
}){
    return(
        <div className='edit-remove-container'>
            <p className='font-extraBold'>{name}</p>
            <Button orange >
                <p className="font-bolder">{buttonText}</p>
            </Button>
            <Button orange >
                <p className="font-bolder">{buttonText}</p>
            </Button>
        </div>
    );
};
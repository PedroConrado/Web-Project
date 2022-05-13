/*
    This file contains a input component whose style is going to be used throught
    the entire system

*/


import React from 'react';

import './styles.css'
import Input from '../Input';
import ImageContainer from '../ImageContainer';

import Button from '../Button';

export default function FormInput({
    style = {},
    title = "",
}){
    return(
        <div className='edit-remove-container'>
            <p className='font-extraBold'>{title}</p>
            <Button orange >
                <p className="font-bolder">Edit Data</p>
            </Button>
            <Button red >
                <p className="font-bolder">Remove</p>
            </Button>
        </div>
    );
};
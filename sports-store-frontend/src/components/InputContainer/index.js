/*
    This file contains the component that is a container of Input,
    adding a label to it
*/


import React from 'react';
import Input from '../Input';

import './styles.css';


export default function InputContainer({
    label = "Default",
    type="text",
    ...props
}) {
    return(
        <div className='input-container'>
            <label>
                {label}
            </label>
            <Input
                type={type}
                {...props}
            />
        </div>
    );
};
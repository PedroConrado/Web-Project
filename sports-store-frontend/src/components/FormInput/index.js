/*
    This file contains a input component whose style is going to be used throught
    the entire system

*/


import React, { useEffect, useState } from 'react';

import './styles.css'
import Input from '../Input';
import ImageContainer from '../ImageContainer';

export default function FormInput({
    style = {},
    title = "",
    type = "text",
    placeholder = "",
    value = "",
    filled = true,
    setValue = () => {},
}){
    const [image, setImage] = useState("");
    return(
        <div className='form-input-container'>
            <p className='font-extraBold'>{title}</p>
            {
                type === "image" ?
                <div className='form-input-container-image'>
                    <Input
                        placeholder={placeholder}
                        value={value}
                        setValue={setValue}
                        setImage={setImage}
                        filled={filled}
                        type={"file"}
                    />
                    <ImageContainer
                        src={image}
                    />
                </div>
                :
                <Input
                    placeholder={placeholder}
                    value={value}
                    setValue={setValue}
                    filled={filled}
                    type={type}
                />
            }
        </div>
    );
};
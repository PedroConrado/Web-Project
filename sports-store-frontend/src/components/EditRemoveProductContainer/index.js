/*
    This file contains a input component whose style is going to be used throught
    the entire system

*/


import React from 'react';

import './styles.css'

import Button from '../Button';
import ImageContainer from '../ImageContainer';


function openProductEditDataPopup(){

}

function openProductRemovePopup(){

}

export default function FormInput({
    style = {},
    itemName = "",
    productData = {},
    productPreviewImageSrc="",
    itemKey,
}){
    return(
        <div className='edit-remove-ProductContainer'>
            <p className='font-extraBold'>{itemName}</p>
            <ImageContainer
                src={require({productPreviewImageSrc})}
            />
            <Button orange onClick={()=>openProductEditDataPopup()}>
                <p className="font-bolder">Edit Data</p>
            </Button>
            <Button red onClick={()=>openProductRemovePopup()}>
                <p className="font-bolder">Remove</p>
            </Button>
        </div>
    );
};
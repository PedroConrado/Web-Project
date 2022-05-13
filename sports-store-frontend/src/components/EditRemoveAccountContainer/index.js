/*
    This file contains a input component whose style is going to be used throught
    the entire system

*/


import React from 'react';

import './styles.css'

import Button from '../Button';

function openEditAccountDataPopup(){

}

function openRemoveAccountPopup(){

}

export default function FormInput({
    style = {},
    itemName = "",
    accountData = {},
    isAdminAccount=false,
    itemKey,
}){
    return(
        <div className='edit-remove-AccountContainer'>
            <p className='font-extraBold'>{itemName}</p>
            <Button orange onClick={()=>openEditAccountDataPopup()}>
                <p className="font-bolder">Edit Data</p>
            </Button>
            <Button red onClick={()=>openRemoveAccountPopup()}>
                <p className="font-bolder">Remove</p>
            </Button>
        </div>
    );
};
/*
    This file contains a input component whose style is going to be used throught
    the entire system

*/


import React from 'react';

import './styles.css'
import Button from '../Button';
import User from "../../classes/User";

export default function ConfirmCancel({
    style = {},
    title = "",
    itemKey,
    handleDelete=()=>{},
    handleClose=()=>{},
    link=false,
    to=""
}){
    return(
        <div className="ConfirmCancelPopup-popupBox">
            <div className='confirmCancel-container'>
                <p className='font-extraBold'>{title}</p>
                <div className='confirmCancel-buttons-container'>
                    <Button red onClick={handleDelete}>
                        <p className="font-bolder">Confirm</p>
                    </Button>
                    <Button orange onClick={handleClose}>
                        <p className="font-bolder">Cancel</p>
                    </Button>   
                </div>
            </div>
        </div>
    );
};
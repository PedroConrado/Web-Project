/*
    This file contains a input component whose style is going to be used throught
    the entire system

*/


import React from 'react';

import './styles.css'
import Button from '../Button';

export default function ConfirmCancel({
    style = {},
    title = "",
}){
    return(
        <div className='confirmCancel-container'>
            <p className='font-extraBold'>{title}</p>
            <div className='confirmCancel-buttons-container'>
                <Button red >
                    <p className="font-bolder">Confirm</p>
                </Button>
                <Button orange onClick={() => {close();}}>
                    <p className="font-bolder">Cancel</p>
                </Button>   
            </div>
        </div>
    );
};
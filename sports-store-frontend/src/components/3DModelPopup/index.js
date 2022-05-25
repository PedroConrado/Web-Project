/*
    This file contains a input component whose style is going to be used throught
    the entire system

*/


import React from 'react';

import ModelViewer from 'react-3d-model-viewer'

import './styles.css'
import Button from '../Button';

export default function ThreeDModelPopup({
    style = {},
    title = "",
    itemKey,
    item,
    url,
    handleClose=()=>{},
    link=false,
    to=""
}){
    return(
        <div className="ThreeDModelPopup-popupBox" modal nested>
            <div className='ThreeDModel-container'>
                <p className='font-extraBold'>{title}</p>
                <ModelViewer url={url} width={"30%"} aspectgRatio={"100%"} color={"#ff9933"} backgroundColor={"#5dbf79"} rotate={false}/>
                <div className='ThreeDModelPopup-buttons-container'>
                    <Button orange onClick={handleClose}>
                        <p className="font-bolder">Cancel</p>
                    </Button>   
                </div>
            </div>
        </div>
    );
};
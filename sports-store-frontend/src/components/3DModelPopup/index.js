/*
    This file contains a input component whose style is going to be used throught
    the entire system

*/

import React, { useState } from "react";
import './styles.css'
import Button from '../Button';


import STLViewer from 'stl-viewer';


export default function ThreeDModelPopup({
    style = {},
    title = "",
    itemKey,
    productData,
    url,
    handleClose=()=>{},
    link=false,
    to=""
}){

    return(
        <div className="ThreeDModelPopup-popupBox">
            <div className='ThreeDModel-container'>
                <p className='font-extraBold'>{productData.name}</p>

                <STLViewer
                    model={productData.image3d}
                    width={400}
                    height={400}
                    modelColor='#FF9933'
                    backgroundColor='#5DBF79'
                    rotate={false}
                    orbitControls={true}
                />
                <div className='ThreeDModelPopup-buttons-container'>
                    <Button orange onClick={handleClose}>
                        <p className="font-bolder">Close</p>
                    </Button>   
                </div>
            </div>
        </div>
    );
};

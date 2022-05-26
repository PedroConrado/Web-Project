/*
    This file contains a input component whose style is going to be used throught
    the entire system

*/

import React, { useState } from "react";
import { StlViewer } from 'react-stl-file-viewer'
import './styles.css'
import Button from '../Button';

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
    const [volume, setvolume] = useState(0);

    return(
        <div className="ThreeDModelPopup-popupBox" modal nested>
            <div className='ThreeDModel-container'>
                <p className='font-extraBold'>{productData.name}</p>

                <StlViewer
                    width={500}
                    height={500}
                    url="../../assets/NikeShoe.stl"
                    groundColor='rgb(255, 255, 255)'
                    objectColor='rgb(0, 0, 0)'
                    skyboxColor='rgb(255, 255, 255)'
                    gridLineColor='rgb(0, 0, 0)'
                    lightColor='rgb(255, 255, 255)'
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

/*

import STLViewer from 'stl-viewer'

import React, { useState, Suspense } from "react";

import './styles.css'
import Button from '../Button';

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
    model= undefined
    const { files } = "../../assets/NikeShoe.stl";
    const reader = new FileReader();
    reader.readAsArrayBuffer("../../assets/NikeShoe.stl");
    reader.onload = (model) => {
      model=reader.result;
    };

    return(
        <div className="ThreeDModelPopup-popupBox" modal nested>
            <div className='ThreeDModel-container'>
                <p className='font-extraBold'>{productData.name}</p>

                <STLViewer
                    model={model}
                    width={400}
                    height={400}
                    modelColor='#B92C2C'
                    backgroundColor='#EAEAEA'
                    rotate={true}
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
*/
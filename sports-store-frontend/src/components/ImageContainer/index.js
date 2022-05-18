/*
    This file contains a component that act as a wrapper for images
*/


import React, { useEffect } from 'react';

import './styles.css'

import {FaCamera} from 'react-icons/fa';


export default function ImageContainer({
    rounded = true,
    size = "60px",
    src = "",
    alt = "",
    ...props
}) {
    return(
        <>
        {
            src !== "" ? 
            <img
                className={`image-container ${rounded ? "image-container-rounded": ""}`}
                style={{
                    width:size,
                    height:size,
                }}
                src={src}
                alt={alt}
            />
            :
            <div className='image-container-rounded image-container-padding background-lightGray'>
                <FaCamera width={30}/>
            </div>
        }
        </>
    );
};
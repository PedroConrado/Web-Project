/*
    This file contains a component that act as a wrapper for images
*/


import React from 'react';

import './styles.css'


export default function ImageContainer({
    rounded = true,
    size = "80px",
    src = "",
    alt = "",
    ...props
}) {
    return(
        <img
            className={`image-container ${rounded ? "image-container-rounded": ""}`}
            style={{
                width:size,
                height:size,
            }}
            src={src}
            alt={alt}
        />
    );
};
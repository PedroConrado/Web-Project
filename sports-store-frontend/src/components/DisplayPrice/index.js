/*
    This file contains a input component whose style is going to be used throught
    the entire system

*/


import React from 'react';

import './styles.css'


export default function DisplayPrice({
    title = "",
    value = "",

}) {
    return(
        <div className="display-price-div">
            <h6>{title}</h6>
            <div className="display-price-right-align">
                <h6>R$ {value}</h6>
            </div>
        </div>
    );
};
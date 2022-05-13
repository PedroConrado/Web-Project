/*
    This file contains the component that shows the description
    of the store and tha main image.
*/


import React from 'react';
import ImageContainer from '../ImageContainer';

import './styles.css'


export default function DescriptionBanner() {
    return (
        <div className='description-banner-container'>
            <div className='description-banner-text-container'>
                <h2>
                    We are a sports website
                </h2>
                <h3>
                    Here you can find anything you want to practice your favorite sport: 
                    shoes for running, balls for basketball, 
                    rackets for tennis and much much more...
                </h3>
                <h3>
                    Start now your journey with us.
                </h3>

            </div>
            <div className='description-banner-images-container'>
                <ImageContainer
                    src={require("../../assets/AsicsShoes.png")}
                />
                <ImageContainer
                    src={require("../../assets/NikeShoe.png")}
                />
                <ImageContainer
                    src={require("../../assets/PumaBall.png")}
                />
            </div>
        </div>
    );
};
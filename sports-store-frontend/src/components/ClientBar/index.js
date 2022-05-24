/*
    This file defines navigation bar of the administrator pages
*/


import {React, useState, useEffect} from "react";
import './styles.css'

import ImageContainer from '../ImageContainer';
import Button from '../Button';

//test using parameter instead of state
export default function ClientBar() {

    return (
        <div className="clientBar">
            <Button clientBar link to="/client-homePage">
                <img className="clientBar-icon"
                    src={require("../../assets/Home.png")}
                />
            </Button>
            <Button clientBar link to="/client-shipping">
                <img className="clientBar-icon"
                    src={require("../../assets/Cart.png")}
                />
            </Button>
            <Button clientBar link to="/client-myAccount">
                <img className="clientBar-icon"
                    src={require("../../assets/MyAccount.png")}
                />
            </Button>
            <Button clientBar link to="/">
                <img className="clientBar-icon"
                    src={require("../../assets/Logout.png")}
                />
            </Button>
        </div> 
    );
}
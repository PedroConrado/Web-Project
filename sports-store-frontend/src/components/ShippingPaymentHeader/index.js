import {React, useState} from "react";
import checkbox from '../../assets/checkbox.png';
import './styles.css'


export default function ShippingPaymentHeader({
    firstTitle = "",
    secondTitle = "",
    styleFirstTitle = "",
    styleSecondTitle = "",

}) {
    return (
        <div className = 'shipping-payment-header'>
            <h6 className={styleFirstTitle}>{firstTitle}</h6>
            <hr className="shipping-payment-header-line"></hr>
            <img src={checkbox}></img>
            <hr className="shipping-payment-header-line"></hr>
            <h6 className={styleSecondTitle}>{secondTitle}</h6>
        </div>
    );
}
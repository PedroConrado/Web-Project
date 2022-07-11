/*
    This file defines form for account data
*/


import {React, useState} from "react";
import Header from '../ShippingPaymentHeader'
import './styles.css'
import ShippingFormInput from '../ShippingFormInput';
import Button from "../Button";
import Cart from "../../classes/Cart";
import { useNavigate, useParams } from "react-router-dom";

export default function PaymentForm({
    title = "",
    user = {},
    setIsShipping = () => {},
}) {
    const navigate = useNavigate();
    const params = useParams();

    const [name, setName] = useState("");
    const [card, setCard] = useState("");
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [cvc, setCvc] = useState("");

    const onOrder =async () =>{
            await Cart.buyProducts();
            navigate('/client-homePage');
    }

    return (
        <div className="PaymentForm">
            <Header
                firstTitle="Shipping"
                secondTitle="Payment"
                styleSecondTitle='font-bolder'
                styleFirstTitle='shipping-payment-font-transparent'
            />
            <h6 className='font-bolder font-extraBold'>{title}</h6>
            <hr className="shippingForm-cross-line"></hr>
            <form className="ShippingForm-form">
                <ShippingFormInput
                    style={'shippingFormInput-row'}
                    title = "Saved Card"
                    placeholder=''
                    type={"text"}
                />
                <ShippingFormInput
                    title = "Name on Card"
                    placeholder={'Pedro'}
                    value = {name}
                    setValue = {setName}
                    type={"text"}
                />
                <ShippingFormInput
                    title="Card"
                    placeholder='0000-0000-0000-0000'
                    type={"text"}
                    value = {card}
                    setValue = {setCard}
                />

                <div className="shippingForm-row">
                    <ShippingFormInput
                        title="Year"
                        style={' payment-form-date'}
                        placeholder='01'
                        type={"text"}
                        value={year}
                        setValue={setYear}
                    />
                    
                    <ShippingFormInput
                        title="Month"
                        style={'shippingFormInput-margin-right ShippingFormInput-date payment-form-month'}
                        placeholder='01'
                        type={"text"}
                        value={month}
                        setValue={setMonth}
                    />
                    <ShippingFormInput
                        title="Shipping"
                        style={'shippingFormInput-margin-left'}
                        type={"text"}
                        value={cvc}
                        setValue={setCvc}
                    />
                </div>
            </form>
            <div className = 'payment-form-button'>
                <Button gray link to = {"/client-homePage"}>
                    <p className="font-bolder">cancel order</p>
                </Button >
                <Button
                    orange 
                    onClick={onOrder}
                >
                    <p className="font-bolder">Order</p>
                </Button>
            </div>

        </div>
    );
}
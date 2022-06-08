import {React, useState} from "react";
import Header from '../ShippingPaymentHeader'
import './styles.css'
import ShippingFormInput from '../ShippingFormInput';
import Button from '../Button';

export default function ShippingForm({
    title = "",
    user = {},
    setIsShipping = () => {},
}) {

    const [address, setAddress] = useState("");
    const [addressNumber, setAddressNumber] = useState("");
    const [street, setStreet] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [shipping, setShipping] = useState("");

    return (
        <div className="ShippingForm">
            <Header
                firstTitle="Shipping"
                secondTitle="Payment"
                styleSecondTitle='shipping-payment-font-transparent ShippingForm-title'
                styleFirstTitle='font-bolder ShippingForm-title'
            />
            <h6 className='font-bolder font-extraBold'>{title}</h6>
            <hr className="shippingForm-cross-line"></hr>
            <form className="ShippingForm-form">
                <ShippingFormInput
                    style={'shippingFormInput-row'}
                    title = "Saved Address"
                    value = {address}
                    setValue = {setAddress}
                    placeholder=''
                    type={"text"}
                />
                <ShippingFormInput
                    title = "Address Number"
                    placeholder={'123'}
                    value = {addressNumber}
                    setValue = {setAddressNumber}
                    type={"text"}
                />
                <ShippingFormInput
                    title="Street Name"
                    placeholder='Avenue'
                    type={"text"}
                    value = {street}
                    setValue = {setStreet}
                />

                <div className="shippingForm-row">
                    <ShippingFormInput
                        title="Postal Code"
                        style={'shippingFormInput-margin-right'}
                        placeholder='12345-67'
                        type={"text"}
                        value={postalCode}
                        setValue={setPostalCode}
                    />
                    <ShippingFormInput
                        title="Shipping"
                        style={'shippingFormInput-margin-left'}
                        type={"text"}
                        value={shipping}
                        setValue={setShipping}
                    />
                </div>
            </form>

            <div className = 'shipping-form-button'>
                <Button gray link to = {"/client-homePage/"+user.id}>
                    <p className="font-bolder">cancel order</p>
                </Button >
                <Button 
                    orange 
                    onClick={() => setIsShipping(false)}
                >
                    <p className="font-bolder">Go to Payment</p>
                </Button>
            </div>

        </div>
    );
}
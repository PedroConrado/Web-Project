import {React, useState} from "react";
import Header from '../ShippingPaymentHeader'
import './styles.css'
import ShippingFormInput from '../ShippingFormInput';

export default function ShippingForm({
    title = "",

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

        </div>
    );
}
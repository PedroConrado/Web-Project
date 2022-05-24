import {React, useState} from "react";

import "./styles.css";

import ShippingForm from "../ShippingForm";
import PaymentForm from "../PaymentForm";
import {Link} from 'react-router-dom';

export default function ShippingPayment() {
    const [shipping, setShipping] = useState(true);
    return(
        <div>
            <div className="shipping-payment-form-background">
                <div className = 'shipping-payment-form-button'>
                    <Link to = "/client-homePage">
                        <button className="button-container">
                            <p className="font-bolder">cancel order</p>
                        </button>
                    </Link>
                    <Link to = {shipping ? "" :  "/client-homePage"}>
                        <button link to="/client-homePage" className="button-container shipping-payment-button background-orange" onClick={() => setShipping(!shipping)}>
                            <p className="font-bolder">{shipping? "Go to Payment" : "Order"}</p>
                        </button>                    
                    </Link>
                </div>
            </div>
            {(shipping)? <ShippingForm
                title="Shipping Details"
            />: <PaymentForm 
                title="Payment Details"
            />
            }
        </div>
    )
}
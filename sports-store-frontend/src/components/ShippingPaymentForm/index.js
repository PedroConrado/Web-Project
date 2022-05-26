import {React, useState, useEffect} from "react";

import "./styles.css";

import ShippingForm from "../ShippingForm";
import PaymentForm from "../PaymentForm";
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
import User from "../../classes/User";

export default function ShippingPayment() {
    const params = useParams();
    const [user, setUser] = useState({})
    useEffect(() => {
        const loadAll = async () => {
            const user = await User.getUserById(parseInt(params.userID));
            setUser(user);
        }
    
      loadAll();
    }, [])
    const [shipping, setShipping] = useState(true);
    return(
        <div>
            <div className="shipping-payment-form-background">
                <div className = 'shipping-payment-form-button'>
                    <Link to = {"/client-homePage/"+user.id}>
                        <button className="button-container background-lightGray">
                            <p className="font-bolder">cancel order</p>
                        </button>
                    </Link>
                    <Link to = {shipping ? "" :  "/client-homePage/"+user.id}>
                        <button link to={"/client-homePage/"+user.id} className="button-container shipping-payment-button background-orange" onClick={() => setShipping(!shipping)}>
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
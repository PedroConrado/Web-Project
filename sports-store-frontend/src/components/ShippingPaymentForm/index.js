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
            <div className="shipping-payment-form-background">
                {(shipping)? 
                    <ShippingForm
                        title="Shipping Details"
                        user={user}
                        setIsShipping={setShipping}
                    />
                    : 
                    <PaymentForm 
                        title="Payment Details"
                        user={user}
                        setIsShipping={setShipping}
                    />
                }
            </div>
            
    )
}
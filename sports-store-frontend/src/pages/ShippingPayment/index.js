import {React, useState} from "react";

import "./styles.css";

import ShippingPayment from "../../components/ShippingPaymentForm";
import OrderDetails from "../../components/OrderDetails";
import Shoe from "../../assets/NikeShoe.png"

export default function Shipping({
    itemName = "",
    tax = "",
    shipping = "",
    image = {},
    subTotal

}) {
    return(
        <div className="admin-myAccount-page-container">
            <ShippingPayment/>
            <OrderDetails
                subTotal="980"
                tax="20"
                shipping="10"
                itemName="Nike Air Plus Mens's"
                image={Shoe}
            />
        </div>
    )
}
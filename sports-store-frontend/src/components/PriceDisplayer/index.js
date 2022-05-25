import {React, useState} from "react";
import DisplaPrice from '../DisplayPrice'

import './styles.css'

export default function PriceDisplayer({
    subTotal = "",
    tax = "",
    shipping = "",
    discount = "0.00",
}) {

    let total = parseFloat(subTotal) + parseFloat(tax) + parseFloat(shipping)
    total = String(total)

    return (
        <div className="price-displayer">
            <DisplaPrice
                title="sub-total"
                value={subTotal}
            />
            <DisplaPrice
                title="discount"
                value={discount}
            />
            <DisplaPrice
                title="tax"
                value={tax}
            />
            <DisplaPrice
                title="shipping"
                value={shipping}
            />
            <DisplaPrice
                title="total"
                value={total}
            />
        </div>
    );
}
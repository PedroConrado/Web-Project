import React from "react";

import "./styles.css";

export default function ItemOrder({
    image="",
    itemName="",
    subTotal=0,
    noItems=0,
    decreaseItemQuantity,
    increaseItemQuantity
}) {
    return (
        <div className='margin-bottom-minus'>
            <img className="clipped" src={image}></img>
            <div className="row-div">
                <div>
                    <h6 className='font-bolder order-details-title'>{itemName}</h6>
                    <h6 className='font-bolder'>{subTotal}</h6>
                </div>
                <div className="row-div right-align">
                    <button onClick={() => decreaseItemQuantity()}>
                        <img src={"/assets/plus-circle.svg"}></img>
                    </button>
                    <h6 className='font-bolder order-details-value'>{noItems}</h6>
                    <button onClick={() => increaseItemQuantity()}>
                        <img src={"/assets/plus-circle.svg"}></img>
                    </button>
                </div>
            </div>
        </div>
    )
}
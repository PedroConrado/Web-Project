import {React, useState} from "react";
import Plus from '../../assets/plus-circle.svg'
import PriceDisplayer from '../PriceDisplayer'
import './styles.css'
import ShippingFormInput from '../ShippingFormInput';

export default function OrderDetails({
    subTotal = "",
    tax = "",
    shipping = "",
    image = {},
    itemName = "",

}) {

    const [giftCode, setGiftCode] = useState("")
    const [noItems, setNoItems] = useState(1.0)
    const [discount, setDiscount] = useState(false)
    const discountValue = 10;
    const validCodes = ["1234", "7890"]

    return (
        <div className="OrderDetails">
            <h6 className='font-bolder'>Order Details</h6>
            <div className='margin-bottom-minus'>
                <img className="clipped" src={image}></img>
                <div className="row-div">
                    <div>
                        <h6 className='font-bolder order-details-title'>{itemName}</h6>
                        <h6 className='font-bolder'>{subTotal}</h6>
                    </div>
                    <div className="row-div right-align">
                        <button onClick={() => setNoItems(noItems === 0? noItems : noItems - 1)}>
                            <img src={Plus}></img>
                        </button>
                        <h6 className='font-bolder order-details-value'>{noItems}</h6>
                        <button onClick={() => setNoItems(noItems + 1)}>
                            <img src={Plus}></img>
                        </button>
                    </div>
                </div>
            </div>

            <form className="order-details-form-card">
                <h6>Gift Card</h6>
                <div className="row-div">
                    <ShippingFormInput
                        type={"text"}
                        value={giftCode}
                        setValue={setGiftCode}
                    />
                    <button type='button' className="background-orange button-container" onClick={() => (
                        (!discount ? setDiscount(validCodes.includes(giftCode)) : "") 
                    )}>
                        <p className="font-bolder">Apply</p>
                    </button>
                </div>
            </form>

            <PriceDisplayer
                subTotal={subTotal*noItems - (discountValue * discount)}
                discount = {discount ? discountValue : "0"}
                tax={tax}
                shipping={shipping}
            />
        </div>
    );
}
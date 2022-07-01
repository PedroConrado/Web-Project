import {React, useEffect, useState} from "react";
//import Plus from '/assets/plus-circle.svg'
import PriceDisplayer from '../PriceDisplayer'
import './styles.css'
import ShippingFormInput from '../ShippingFormInput';
import Cart from "../../classes/Cart";
import ItemOrder from "./ItemOrder";

export default function OrderDetails({
    cartItems = [],
    setCartItems

}) {
    const [subTotal, setSubtotal] = useState(0);

    useEffect(() => {
        let temp = 0;
        cartItems.forEach(obj => {
            temp+= obj.price * obj.quantity;
        })
        setSubtotal(temp);
        console.log(cartItems);
    }, [cartItems]);


    const increaseItemQuantity = async (itemIdx) => {
        const q=await Cart.increaseQuantity(cartItems[itemIdx].id);
        setCartItems(oldItems => {
            const temp = [...oldItems]
            temp[itemIdx].quantity=q;
            return temp;
        })
    }

    const decreaseItemQuantity = (itemIdx) => {
        Cart.decreaseQuantity(cartItems[itemIdx].id);
        setCartItems(oldItems => {
            const temp = [...oldItems]
            if(temp[itemIdx].quantity > 0)
                temp[itemIdx].quantity--;
            if(temp[itemIdx].quantity <= 0)
                temp.splice(itemIdx, 1);
            return temp;
        })
    }


    return (
        <div className="OrderDetails">
            <h6 className='font-bolder'>Order Details</h6>
            {
                cartItems.map((obj, idx) => (
                    <ItemOrder
                        image={obj.image}
                        itemName={obj.name}
                        noItems={obj.quantity}
                        subTotal={obj.price}
                        increaseItemQuantity = {() => increaseItemQuantity(idx)}
                        decreaseItemQuantity = {() => decreaseItemQuantity(idx)}
                        key={idx}
                    />
                ))
            }
            

            {/* <form className="order-details-form-card">
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
            </form> */}

            <PriceDisplayer
                subTotal={subTotal}
                tax={10}
                shipping={10}
            />
        </div>
    );
}
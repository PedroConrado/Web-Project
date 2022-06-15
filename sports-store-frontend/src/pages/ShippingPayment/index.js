import {React, useEffect, useLayoutEffect, useState} from "react";

import "./styles.css";

import ShippingPayment from "../../components/ShippingPaymentForm";
import OrderDetails from "../../components/OrderDetails";
import Cart from "../../classes/Cart";
import ClientBar from "../../components/ClientBar";
//import Shoe from "/assets/NikeShoe.png"

export default function Shipping({
    itemName = "",
    tax = "",
    shipping = "",
    image = {},
    subTotal

}) {
    const [cartItems, setCartItems] = useState(undefined);
    const [marginLeft, setMarginLeft] = useState(0);

    useLayoutEffect(() => {
        function updateSize() {
            const clientBar = document.getElementsByClassName("clientBar");
            if(clientBar.length > 0) {
                setMarginLeft(clientBar[0].clientWidth + 40);
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
      }, []);

    useEffect(() => {
        const getCart = async() => {
            try {
                const cart = await Cart.getItemsCart();
                setCartItems(cart);
            } catch(e) {
                console.log(e);
                alert("Unable to get cart info");
            }
        }
        getCart();
    }, [])
    return(
        < >
            <ClientBar />
            {
                cartItems === undefined ?
                null
                :
                    
                    <div className="shipping-page-container" style={{marginLeft}}>
                        {
                            cartItems.length === 0 ?
                            <h1>There is no items in the cart</h1>
                            :
                            <>
                                <ShippingPayment/>
                                <OrderDetails
                                cartItems={cartItems}
                                setCartItems={setCartItems}
                                />
                            </>
                        }
                    </div>
            }
        </>
    )
}
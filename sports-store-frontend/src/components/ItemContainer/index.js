import React, {useState, useEffect} from "react";
import './styles.css'
import Button from "../Button"
import { useNavigate, useParams } from "react-router-dom";
import User from "../../classes/User";
import Cart from "../../classes/Cart";

export default function ItemContainer({
    item,

}) {
    const navigate = useNavigate();
    const addItemCart = () => {
        Cart.insertItem(item.id);
        navigate(`/client-shipping`);
    }

    return (
        <div>
            <div className="itemContainer">
                <img src={item.image} alt="item"></img>
                <p>{item.name}</p>
                <p>R${item.price}</p>
                <Button orange onClick={addItemCart}>
                    ADD TO CART
                </Button>
                <Button purple link to={"/client-productPage/"+item.id}>
                    <h5>
                        View
                    </h5>
                </Button>
            </div>
        </div>
    );
}
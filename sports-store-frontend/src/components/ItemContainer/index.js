import React, {useState} from "react";
import './styles.css'
import Button from "../Button"

export default function ItemContainer({
    item,

}) {
        return (
        <div>
            <div className="itemContainer">
                <img src={require(`../../assets/${item.image}`)} alt="item"></img>
                <p>{item.name}</p>
                <p>R${item.price}</p>
                <Button orange link to="/client-shipping">
                    ADD TO CART
                </Button>
            </div>
        </div>
    );
}
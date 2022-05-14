/*
    This file defines a list of products for the admin to view and choose to edit or remove
*/


import {React, useState} from "react";
import plus from '../../assets/plus-circle.svg';
import './styles.css'

import EditRemoveProduct from "../EditRemoveProductContainer";

export default function AccountForm({
    title = "Default Title",
    style = {},
    productList = [],
    ...props
}) {

    return (
        <div className="admin-view-productsList">
            <h4 className='font-bolder'>{title}</h4>
            
            <EditRemoveProduct itemName="Product 1" productPreviewImageSrc={require("../../assets/AsicsShoes.png")}/>
            <EditRemoveProduct itemName="Product 2" productPreviewImageSrc={require("../../assets/NikeShoe.png")}/>
        </div>
    );
}
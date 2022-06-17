/*
    This file defines a list of products for the admin to view and choose to edit or remove
*/


import {React, useState, useEffect} from "react";
import './styles.css'

import EditRemoveProduct from "../EditRemoveProductContainer";
import Product from "../../classes/Product";

export default function AdminViewProductsList({
    title = "Default Title",
    style = {},
    productList = [],
    ...props
}) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const loadAll = async () => {
            let items = []
            let maleList = await Product.getMaleProducts();
            items = items.concat(maleList)
            let femaleList = await Product.getFemaleProducts();
            items = items.concat(femaleList)
            let kidsList = await Product.getKidsProducts();
            items = items.concat(kidsList)
            setItems(items)
        }
    
      loadAll();
    }, [])

    return (
        <div className="admin-view-productsList">
            <h4 className='font-bolder'>{title}</h4>
            {items.length > 0 && items.map((item,key)=>(
                <div key={key}>
                    <EditRemoveProduct
                        item={item}
                        itemName={item.name} productPreviewImageSrc={item.image}
                    />
                </div>
            ))}
        </div>
    );
}
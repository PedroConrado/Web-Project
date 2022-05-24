/*
    This file defines a list of products for the admin to view and choose to edit or remove
*/


import {React, useState, useEffect} from "react";
import plus from '../../assets/plus-circle.svg';
import './styles.css'

import EditRemoveProduct from "../EditRemoveProductContainer";
import {getFemaleList, getMaleList, getKidsList} from "../../ItemManager";

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
            let maleList = await getMaleList();
            items = items.concat(maleList[0].items)
            let femaleList = await getFemaleList();
            items = items.concat(femaleList[0].items)
            let kidsList = await getKidsList();
            items = items.concat(kidsList[0].items)
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
                        itemName={item.name} productPreviewImageSrc={require("../../assets/"+item.image)}
                    />
                </div>
            ))}
        </div>
    );
}
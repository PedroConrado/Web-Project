import {React, useState} from "react";
import Plus from '/assets/plus-circle.svg';
import './styles.css'


export default function ItemDisplayer({
    itemName = "",
    totalPrice="0.00",
    style = {},
    image = {},
    isAdmin = false,
    isRegister = false,
    onClick = () =>{},
    accountData={},
    link = false,
    to="",
    ...props
}) { 

    const [noItems, setNoItems] = useState(1);
    return (
        <div className='margin-bottom-minus'>
            <img className="clipped" src={image}></img>
            <div className="row-div">
                <div>
                    <h6 className='font-bolder details-title'>{itemName}</h6>
                    <h6 className='font-bolder'>{totalPrice}</h6>
                </div>
                <div className="row-div right-align">
                    <button onClick={() => setNoItems(noItems === 0? noItems : noItems - 1)}>
                        <img src={Plus}></img>
                    </button>
                    <h6 className='font-bolder details-title'>{noItems}</h6>
                    <button onClick={() => setNoItems(noItems + 1)}>
                        <img src={Plus}></img>
                    </button>
                </div>
            </div>
        </div>
    );
}

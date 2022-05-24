/*
    This file defines form for product data
*/

import {React, useState} from "react";
import plus from '../../assets/plus-circle.svg';
import './styles.css'
import FormInput from '../FormInput/';
import Button from '../Button';

export default function ProductFormPopup({
    style = {},
    productData = {},
    onClick = () =>{},
    handleClose=()=>{},
    link = false,
    to="",
    ...props
}) { //recieve an account object and set values of form to that account
    //onsubmit should call a function passed to this form that updates account
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [qtInStock, setQtInStock] = useState("");
    const [qtSold, setQtSold] = useState("");   
    const [image, setImage] = useState("");
    const [threeDModel, setThreeDModel] = useState("");
    return(
        <div className="ProductFormPopup-popupBox" modal nested>
            <div className="ProductFormPopup" >
                <form className="ProductFormPopup-form">
                    <FormInput
                        title="Name"
                        placeholder='Current Name'
                        value={name}
                        setValue={setName}
                        type={"text"}
                    />
                    <FormInput
                        title="Description"
                        placeholder='Current Description'
                        value={description}
                        setValue={setDescription}
                        type={"text"}
                    />
                    <FormInput
                        title="Price"
                        placeholder='Current Price'
                        value={price}
                        setValue={setPrice}
                        type={"number"}
                    />
                    <FormInput
                        title="QtInStock"
                        placeholder='Current Quantity In Stock'
                        value={qtInStock}
                        setValue={setQtInStock}
                        type={"number"}
                    />
                    <FormInput
                        title="QtSold"
                        placeholder='Current Quantity Sold'
                        value={qtSold}
                        setValue={setQtSold}
                        type={"number"}
                    />
                    <FormInput
                        title={"Image"}
                        placeholder={'Current File'}
                        value={image}
                        setValue={setImage}
                        type={"image"}
                    />
                    <FormInput
                        title={"3dModel"}
                        placeholder={'Current File'}
                        value={threeDModel}
                        setValue={setThreeDModel}
                        type={"file"}
                    />
                    
                    <div className='productFormPopup-buttons-container' type="submit">
                        <Button red onClick={handleClose}>
                            <p className="font-bolder">Save Changes</p>
                        </Button>
                        <Button orange onClick={handleClose} >
                            <p className="font-bolder">Close</p>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
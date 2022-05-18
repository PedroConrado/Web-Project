/*
    This file defines form for product data
*/

import {React, useState} from "react";
import plus from '../../assets/plus-circle.svg';
import './styles.css'
import ImageContainer from '../ImageContainer';
import FormInput from '../FormInput/';
import Button from '../Button';

export default function AccountForm({
    title = "Default Title",
    //add-product="Add Product"
    //popup=""
    formDescription = "Default Description",
    //add-product="Enter the information to register a product:"
    //popup=""

    buttonText = "Default Text",
    //my-account-admin/client="Save Changes:"
    //add-client="Register"
    //add-admin="Register"
    //popup="Save Changes"

    style = {},
    isAdmin = false,
    isRegister = false,
    productData={},
    onClick = () =>{},
    link = false,
    to="",
    ...props
}) { 
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [qtInStock, setQtInStock] = useState("");
    const [qtSold, setQtSold] = useState("");   
    const [image, setImage] = useState("");
    const [threeDModel, setThreeDModel] = useState("");
    return (
        <div className="ProductForm">
            <h4 className='font-bolder ProductForm-title'>{title}</h4>
            <p className='font-bolder'>{formDescription}</p>
            <form className="ProductForm-form">
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
                
                
                <Button orange link={link} to={to}>
                    <img src={plus} hidden={!isRegister}/>
                    <p className="font-bolder">{buttonText}</p>
                </Button>
            </form>
        </div>
    );
}
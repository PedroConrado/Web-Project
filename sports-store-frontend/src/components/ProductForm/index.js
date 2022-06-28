/*
    This file defines form for product data
*/

import {React, useState} from "react";
//import plus from '/assets/plus-circle.svg';
import './styles.css'
import ImageContainer from '../ImageContainer';
import FormInput from '../FormInput/';
import Button from '../Button';
import Product from "../../classes/Product";


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
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [qtInStock, setQtInStock] = useState("");
    const [qtSold, setQtSold] = useState("");   
    const [image, setImage] = useState("");
    const [threeDModel, setThreeDModel] = useState("");

    const handleSubmit = async (e) => {
        if(name=="" || category=="" || price=="") return null;
        console.log("adding new product")
        let newProductData={
            name: name,
            description: description,
            category: category,
            price: price,
            quantityStock: qtInStock,
            quantitySold: qtSold,
            image: "default.png",
            image3d: "default.stl",

        }
        e.preventDefault();
        await Product.addProduct(newProductData);
        window.location.reload()
    }

    return (//recieve an account object and set values of form to that account
    //onsubmit should call a function passed to this form that updates account if there is one or creates a new account if its null
        <div className="ProductForm">
            <h4 className='font-bolder ProductForm-title'>{title}</h4>
            <p className='font-bolder'>{formDescription}</p>
            <form className="ProductForm-form" onSubmit={handleSubmit}>
                <FormInput
                    title="Name"
                    placeholder='Name'
                    value={name}
                    setValue={setName}
                    type={"text"}
                />
                <FormInput
                    title="Description"
                    placeholder='Description'
                    value={description}
                    setValue={setDescription}
                    type={"text"}
                />
                <FormInput
                    title="Category"
                    placeholder='Category'
                    value={category}
                    setValue={setCategory}
                    type={"text"}
                />
                <FormInput
                    title="Price"
                    placeholder='Price'
                    value={price}
                    setValue={setPrice}
                    type={"number"}
                />
                <FormInput
                    title="QtInStock"
                    placeholder='Quantity In Stock'
                    value={qtInStock}
                    setValue={setQtInStock}
                    type={"number"}
                />
                <FormInput
                    title="QtSold"
                    placeholder='Quantity Sold'
                    value={qtSold}
                    setValue={setQtSold}
                    type={"number"}
                />
                <FormInput
                    title={"Image"}
                    placeholder={'File'}
                    value={image}
                    setValue={setImage}
                    type={"image"}
                />
                <FormInput
                    title={"3dModel"}
                    placeholder={'File'}
                    value={threeDModel}
                    setValue={setThreeDModel}
                    type={"file"}
                />
                
                
                <Button orange link={link} to={to} type="submit">
                    <img src={"/assets/plus-circle.svg"} hidden={!isRegister}/>
                    <p className="font-bolder">{buttonText}</p>
                </Button>
            </form>
        </div>
    );
}
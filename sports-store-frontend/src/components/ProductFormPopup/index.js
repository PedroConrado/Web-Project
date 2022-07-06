/*
    This file defines form for product data
*/

import {React, useState} from "react";
//import plus from '/assets/plus-circle.svg';
import './styles.css'
import FormInput from '../FormInput/';
import Button from '../Button';
import Product from "../../classes/Product";

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
    const [name, setName] = useState(productData.name);
    const [description, setDescription] = useState(productData.description);
    const [tamanho, setTamanho] = useState(productData.tamanho);
    const [marca, setMarca] = useState(productData.marca);
    const [category, setCategory] = useState(productData.category);
    const [price, setPrice] = useState(productData.price);
    const [qtInStock, setQtInStock] = useState(productData.quantityStock);
    const [qtSold, setQtSold] = useState(productData.quantitySold);   
    const [image, setImage] = useState(productData.image.replace("/assets/", ''));
    const [threeDModel, setThreeDModel] = useState(productData.image3d.replace("/assets/", ''));

    const handleSubmit = async (e) => {
        if(name=="" || category=="" || price=="") return null;
        if(image=="") image="default.png";
        if(threeDModel=="") threeDModel="default.stl";
        console.log("updating product")
        let newProductData={
            id: productData.id,
            name: name,
            description: description,
            tamanho: tamanho,
            marca: marca,
            category: category,
            price: price,
            quantityStock: qtInStock,
            quantitySold: qtSold,
            image: image,
            image3d: threeDModel,

        }
        console.log(newProductData)
        e.preventDefault();
        await Product.updateProduct(newProductData);
        window.location.reload();
    }

    return(
        <div className="ProductFormPopup-popupBox">
            <div className="ProductFormPopup" >
                <form className="ProductFormPopup-form" onSubmit={handleSubmit}>
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
                        title="Tamanho"
                        placeholder='Current Tamanho'
                        value={tamanho}
                        setValue={setTamanho}
                        type={"text"}
                    />
                    <FormInput
                        title="Marca"
                        placeholder='Current Marca'
                        value={marca}
                        setValue={setMarca}
                        type={"text"}
                    />
                    <FormInput
                        title="Category"
                        placeholder='Current Category'
                        value={category}
                        setValue={setCategory}
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
                        placeholder={'File name in public/assets or link'}
                        value={image}
                        setValue={setImage}
                        type={"text"}
                    />
                    <FormInput
                        title={"3dModel"}
                        placeholder={'STL file name in public/assets or link'}
                        value={threeDModel}
                        setValue={setThreeDModel}
                        type={"text"}
                    />
                    
                    <div className='productFormPopup-buttons-container' type="submit">
                        <Button red onClick="handleSubmit(); handleClose()">
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
/*
    This is file contain the login page, which consists of a forms,
    a link to the sign up page and a brief description of the system.
*/

import React from "react";

import "./styles.css";

import AdminBar from "../../components/AdminBar";
import ProductForm from "../../components/ProductForm";

export default function AddProduct() {
    //add div around account form to with a class to center it in the div
    return(
        <div className="AddProduct-page-container">
            <AdminBar page={4}/>
            <ProductForm 
                isAdmin={true}
                isRegister={true}
                title="Register Product"
                formDescription="Enter the information to register a product:"
                buttonText="Register"
            />
        </div>
    )
}
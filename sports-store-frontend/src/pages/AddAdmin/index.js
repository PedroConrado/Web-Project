/*
    This file contains the page where admins can create new admin accounts
*/

import React from "react";

import "./styles.css";

import AdminBar from "../../components/AdminBar";
import AccountForm from "../../components/AccountForm";

export default function AddAdmin() {
    //add div around account form to with a class to center it in the div
    return(
        <div className="AddAdmin-page-container">
            <AdminBar page={0}/>
            <AccountForm 
                isAdmin={true}
                isRegister={true}
                title="Register Administrator"
                description="Enter the information to register an administrator:"
                buttonText="Register"
            />
        </div>
    )
}
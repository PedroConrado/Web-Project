/*
    This file contains the page where an admin can change the information in his account
*/

import React from "react";

import "./styles.css";

import ClientBar from "../../components/ClientBar";
import AccountForm from "../../components/AccountForm";

export default function ClientMyAccount() {
    //add div around account form to with a class to center it in the div
    return(
        <div className="client-myAccount-page-container">
            <ClientBar />
            <AccountForm 
                isAdmin={false}
                isRegister={false}
                title="Edit Your Account"
                description="Modify your account information:"
                buttonText="Save Changes"
            />
        </div>
    )
}
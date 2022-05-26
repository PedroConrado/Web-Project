/*
    This file contains the page where an admin can change the information in his account
*/

import React from "react";

import "./styles.css";

import ClientBar from "../../components/ClientBar";
import MyAccountForm from "../../components/MyAccountForm";

export default function ClientMyAccount() {
    //add div around account form to with a class to center it in the div
    return(
        <div className="client-myAccount-page-container">
            <ClientBar />
            <MyAccountForm 
                isAdmin={false}
                isRegister={false}
                title="Edit Your Account"
                description="Modify your account information:"
                buttonText="Save Changes"
            />
        </div>
    )
}
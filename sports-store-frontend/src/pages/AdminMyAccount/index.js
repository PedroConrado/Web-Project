/*
    This file contains the page where an admin can change the information in his account
*/

import React from "react";

import "./styles.css";

import AdminBar from "../../components/AdminBar";
import MyAccountForm from "../../components/MyAccountForm";

export default function AdminMyAccount() {
    //add div around account form to with a class to center it in the div
    return(
        <div className="admin-myAccount-page-container">
            <AdminBar page={6}/>
            <MyAccountForm 
                isAdmin={true}
                isRegister={false}
                title="Edit Your Account"
                description="Modify your account information:"
                buttonText="Save Changes"
            />
        </div>
    )
}

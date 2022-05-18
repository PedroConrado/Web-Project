/*
    This is file contain the login page, which consists of a forms,
    a link to the sign up page and a brief description of the system.
*/

import React from "react";

import "./styles.css";

import AdminBar from "../../components/AdminBar";
import AccountForm from "../../components/AccountForm";

export default function AddClient() {
    //add div around account form to with a class to center it in the div
    return(
        <div className="AddClient-page-container">
            <AdminBar page={2}/>
            <AccountForm 
                isAdmin={false}
                isRegister={true}
                title="Register Client"
                description="Enter the information to register a client:"
                buttonText="Register"
            />
        </div>
    )
}
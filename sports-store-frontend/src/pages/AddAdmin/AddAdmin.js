/*
    This is file contain the login page, which consists of a forms,
    a link to the sign up page and a brief description of the system.
*/

import React from "react";

import "./AddAdminStyles.css";

import AdminBar from "../../components/AdminBar/AdminBar";
import AccountForm from "../../components/AccountForm/AccountForm";

export default function AddAdmin() {
    return(
        <div className="AddAdmin-page-container">
            <AdminBar currentPage={1}/>
            <AccountForm isAdmin={true} isRegister={true}/>
        </div>
    )
}
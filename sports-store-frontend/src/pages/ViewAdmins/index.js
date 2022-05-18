/*
    This file contains the page where admins can create new admin accounts
*/

import React from "react";

import "./styles.css";

import AdminBar from "../../components/AdminBar";
import AdminViewAccountsList from "../../components/AdminViewAccountsList";


export default function ViewAdmins() {
    //add div around account form to with a class to center it in the div
    return(
        <div className="ViewAdmins-page-container">
            <AdminBar page={1}/>
            <AdminViewAccountsList isAdmin title="Administrator List" />
        </div>
    )
}
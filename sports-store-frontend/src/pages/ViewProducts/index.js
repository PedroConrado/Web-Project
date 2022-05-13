/*
    This file contains the page where admins can create new admin accounts
*/

import React from "react";

import "./styles.css";

import AdminBar from "../../components/AdminBar";

export default function viewProducts() {
    //add div around account form to with a class to center it in the div
    return(
        <div className="ViewProducts-page-container">
            <AdminBar page={5}/>
        </div>
    )
}
/*
    This file contains the page where admins can create new admin accounts
*/

import React from "react";

import "./styles.css";

import AdminBar from "../../components/AdminBar";
import AdminViewAccountsList from "../../components/AdminViewAccountsList";

export default function viewClients() {
    //add div around account form to with a class to center it in the div
    return(
        <div className="ViewClients-page-container">
            <AdminBar page={3}/>
            <AdminViewAccountsList isAdmin={false} title="Client List" />
        </div>
    )
}
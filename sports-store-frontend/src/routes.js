/*
    This file defines the navigation of our web system, the routes and the pages
    of each route.
*/


import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';



// pages
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AddAdmin from "./pages/AddAdmin";
import AddClient from "./pages/AddClient";
import AddProduct from "./pages/AddProduct";
import AdminMyAccount from "./pages/AdminMyAccount";
import ClientMyAccount from "./pages/ClientMyAccount";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/sign-up" element={<SignUp/>} />
                <Route exact path="/admin-addAdmin" element={<AddAdmin/>} />
                <Route exact path="/admin-addClient" element={<AddClient/>} />
                <Route exact path="/admin-addProduct" element={<AddProduct/>} />
                <Route exact path="/admin-myAccount" element={<AdminMyAccount/>} />
                <Route exact path="/client-myAccount" element={<ClientMyAccount/>} />
                <Route path="/" element={<Login/>}/>
            </Routes>
        </BrowserRouter>

    )
}
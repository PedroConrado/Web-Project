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
import ViewAdmins from "./pages/ViewAdmins";
import ViewClients from "./pages/ViewClients";
import ViewProducts from "./pages/ViewProducts";
import AdminMyAccount from "./pages/AdminMyAccount";
import ClientMyAccount from "./pages/ClientMyAccount";
import Shipping from "./pages/ShippingPayment";
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/sign-up" element={<SignUp/>} />
                <Route exact path="/admin-addAdmin/:userID" element={<AddAdmin/>} />
                <Route exact path="/admin-addClient/:userID" element={<AddClient/>} />
                <Route exact path="/admin-addProduct/:userID" element={<AddProduct/>} />
                <Route exact path="/admin-viewAdmins/:userID" element={<ViewAdmins/>} />
                <Route exact path="/admin-viewClients/:userID" element={<ViewClients/>} />
                <Route exact path="/admin-viewProducts/:userID" element={<ViewProducts/>} />
                <Route exact path="/admin-myAccount/:userID" element={<AdminMyAccount/>} />
                <Route exact path="/client-myAccount/:userID" element={<ClientMyAccount/>} />
                <Route exact path="/client-shipping/:userID" element={<Shipping/>} />
                <Route exact path="/client-homePage/:userID" element={<HomePage/>} />
                <Route exact path="/client-productPage/:userID/:productID" element={<ProductPage/>} />
                <Route path="/" element={<Login/>}/>
            </Routes>
        </BrowserRouter>

    )
}
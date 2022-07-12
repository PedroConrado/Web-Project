/*
    This file defines the navigation of our web system, the routes and the pages
    of each route.
*/


import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';



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
import ProductPage from "./pages/ProductPage";
import axios from "axios";

const isAuthenticated = (props) => {
    let userData = localStorage.getItem("user");
    let token = localStorage.getItem("token");
    if (!token) return false;
    token = token.replace(/"/g, '');

    userData = JSON.parse(userData);
    if(props.admin && !userData.isAdmin)
        return false;
    if(props.client && userData.isAdmin)
        return false;
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    return userData;
}
const PrivateRoute = ({ component, ...rest }) => {
    const userData = isAuthenticated(rest);
    if (!userData) {
        localStorage.clear();
        return <Navigate to='/' />;
    }

    const Component = component;
    return Component;
};
    

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/sign-up" element={<SignUp/>} />
                <Route exact path="/admin-addAdmin" element={< PrivateRoute admin component={<AddAdmin/>}/>} />
                <Route exact path="/admin-addClient" element={< PrivateRoute admin component={<AddClient/>}/>} />
                <Route exact path="/admin-addProduct" element={< PrivateRoute admin component={<AddProduct/>}/>} />
                <Route exact path="/admin-viewAdmins" element={< PrivateRoute admin component={<ViewAdmins/>}/>} />
                <Route exact path="/admin-viewClients" element={< PrivateRoute admin component={<ViewClients/>}/>} />
                <Route exact path="/admin-viewProducts" element={< PrivateRoute admin component={<ViewProducts/>}/>} />
                <Route exact path="/admin-myAccount" element={< PrivateRoute admin component={<AdminMyAccount/>}/>} />
                <Route exact path="/client-myAccount" element={< PrivateRoute client component={<ClientMyAccount/>}/>} />
                <Route exact path="/client-shipping" element={< PrivateRoute client component={<Shipping/>}/>} />
                <Route exact path="/client-homePage" element={< PrivateRoute client component={<HomePage/>}/>} />
                <Route exact path="/client-productPage/:productID" element={< PrivateRoute client component={<ProductPage/>}/>} />
                <Route path="/" element={<Login/>}/>
            </Routes>
        </BrowserRouter>

    )
}
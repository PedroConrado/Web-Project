/*
    This file defines the navigation of our web system, the routes and the pages
    of each route.
*/


import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';



// pages
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AddAdmin from "./pages/AddAdmin/AddAdmin";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/sign-up" element={<SignUp/>} />
                <Route exact path="/admin" element={<AddAdmin/>}/>
                <Route path="/" element={<Login/>}/>
            </Routes>
        </BrowserRouter>

    )
}
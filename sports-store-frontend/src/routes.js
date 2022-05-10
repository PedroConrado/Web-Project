/*
    This file defines the navigation of our web system, the routes and the pages
    of each route.
*/


import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';



// pages
import Login from "./pages/Login";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
            </Routes>
        </BrowserRouter>

    )
}
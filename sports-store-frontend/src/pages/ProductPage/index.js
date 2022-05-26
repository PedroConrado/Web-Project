import React from "react";

import "./styles.css";

import ClientBar from "../../components/ClientBar";
import ProductViewer from "../../components/ProductViewer";


export default function ProductPage() {
    //add div around account form to with a class to center it in the div
    return(
        <div>
            <ClientBar />
            <ProductViewer />
        </div>
    )
}
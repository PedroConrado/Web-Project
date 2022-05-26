import React from "react";

import "./styles.css";

import ClientBar from "../../components/ClientBar";
import ProductViewer from "../../components/ProductViewer";


export default function ProductPage() {
    return(
        <div>
            <ClientBar />
            <ProductViewer />
        </div>
    )
}
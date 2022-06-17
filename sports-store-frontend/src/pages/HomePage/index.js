import React from "react";

import "./styles.css";

import ClientBar from "../../components/ClientBar";
import HomePageMain from "../../components/HomePageMain";

export default function HomePage() {
    //add div around account form to with a class to center it in the div
    return(
        <div>
            <ClientBar />
            <HomePageMain/>
        </div>
    )
}
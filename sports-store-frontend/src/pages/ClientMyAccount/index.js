/*
    This file contains the page where an admin can change the information in his account
*/

import React, { useLayoutEffect, useState } from "react";

import "./styles.css";

import ClientBar from "../../components/ClientBar";
import MyAccountForm from "../../components/MyAccountForm";

export default function ClientMyAccount() {
    //add div around account form to with a class to center it in the div
    const [marginLeft, setMarginLeft] = useState(0);

    useLayoutEffect(() => {
        function updateSize() {
            const clientBar = document.getElementsByClassName("clientBar");
            if(clientBar.length > 0) {
                setMarginLeft(clientBar[0].clientWidth + 10);
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
      }, []);
    return(
        <div className="client-myAccount-page-container">
            <ClientBar />
            <div style={{marginLeft}}>
                <MyAccountForm 
                    isAdmin={false}
                    isRegister={false}
                    title="Edit Your Account"
                    description="Modify your account information:"
                    buttonText="Save Changes"
                />

            </div>
        </div>
    )
}

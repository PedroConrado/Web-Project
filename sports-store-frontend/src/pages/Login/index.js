/*
    This is file contain the login page, which consists of a forms,
    a link to the sign up page and a brief description of the system.
*/

import React from "react";

import "./styles.css";

import LoginForm from "../../components/LoginForm";
import DescriptionBanner from "../../components/DescriptionBanner";

export default function Login() {
    return(
        <div className="login-page-container">
            <LoginForm />
            <DescriptionBanner />
        </div>
    )
}
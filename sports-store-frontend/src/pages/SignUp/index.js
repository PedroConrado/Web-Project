/*
    This file contains the component that represents the
    Sign Up page.
*/


import React from 'react';

import './styles.css'


export default function SignUp() {
    return(
        <div className="sign-up-page-container">
            <LoginForm />
            <DescriptionBanner />
        </div>
    );
};
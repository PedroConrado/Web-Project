/*
    This file contains the component that represents the
    Sign Up page.
*/


import React from 'react';
import SignUpForm from '../../components/SignUpForm';

import './styles.css'


export default function SignUp() {
    return(
        <div className="sign-up-page-container">
            <SignUpForm />
            <DescriptionBanner />
        </div>
    );
};
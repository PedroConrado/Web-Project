/*
    This file contains the forms used by the client to register himself
    into the system.
*/


import React from 'react';
import AccountForm from '../AccountForm';
import Button from '../Button';

import './styles.css'


export default function SignUpForm() {
    return(
        <div className='sign-up-form-container background-green'>
            <div className='sign-up-form-inner-container'>
                <Button
                    link
                    to='/'
                    orange
                >
                    <p className='font-bolder'>Go Back</p>
                </Button>
                <AccountForm
                title='Create Account'
                description='Insert your personal data below'
                buttonText='Create'
                />
            </div>
        </div>
    );
};
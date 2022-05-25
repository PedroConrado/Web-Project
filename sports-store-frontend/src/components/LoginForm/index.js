/*
    This file contains the forms to login the store
*/


import React, { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import FormInput from '../FormInput';

import './styles.css'


export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div className='login-form-container background-green'>
            <h1>
                Sign In
            </h1>
            <form className='login-form-forms'>
                <div className='login-form-inputs-container'>
                    <FormInput
                        placeholder='Email'
                        value={email}
                        setValue={setEmail}
                        type={"email"}
                        title="Email"
                        filled={false}
                    />

                    <FormInput
                        placeholder='Password'
                        value={password}
                        setValue={setPassword}
                        type="password"
                        title="Password"
                        filled={false}
                    />
                </div>
                <div className='login-form-buttons-container'>
                    <Button orange link to="/admin-addAdmin" type="submit">
                        <h5>
                            Let's Go
                        </h5>
                    </Button>
                    <Button purple link to="/sign-up">
                        <h5>
                            Sign Up
                        </h5>
                    </Button>
                </div>
            </form>

        </div>
    );
};
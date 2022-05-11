/*
    This file contains the forms to login the store
*/


import React, { useState } from 'react';
import Button from '../Button';
import Input from '../Input';

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
                    <Input
                        placeholder='Email'
                        value={email}
                        setValue={setEmail}
                        type={"email"}
                    />

                    <Input
                        placeholder='Password'
                        value={password}
                        setValue={setPassword}
                        type="password"
                    />
                </div>
                <div className='login-form-buttons-container'>
                    <Button orange>
                        <h5>
                            Let's Go
                        </h5>
                    </Button>
                    <Button purple link to="/sign-up" >
                        <h5>
                            Sign Up
                        </h5>
                    </Button>
                </div>
            </form>

        </div>
    );
};
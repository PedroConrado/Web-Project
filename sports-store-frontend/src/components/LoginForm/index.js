/*
    This file contains the forms to login the store
*/


import {React, useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import Button from '../Button';
import Input from '../Input';
import FormInput from '../FormInput';

import User from '../../classes/User';

import './styles.css'


export default function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const loadAll = async () => {
            let account = await User.getUsers();             
            setAccounts(account)
        }
    
      loadAll();
    }, [])

    async function login() {
        console.log("logging in")
        try {
            let user=undefined
            for (const obj of accounts) {
                console.log(obj)
                if(obj.email === email && obj.password === password) {
                    localStorage.setItem("user", JSON.stringify(obj));
                    user = new User(obj);
                }
            }
            if(user===undefined){
                throw new Error("Usuário não encontrado!");
            }
            else if (user.isAdmin) {
                navigate("/admin-addAdmin");
            }
            else{
                navigate("/client-homePage");
            }

        } catch(err) {
            alert(`Erro ao fazer login: ${err.message}`);
        }
    }
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
                    <Button orange onClick={login}>
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
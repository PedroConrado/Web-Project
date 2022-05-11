/*
    This file defines form for product data
*/

import {React, useState} from "react";
import plus from '../../assets/plus-circle.svg';
import './AccountFormStyles.css'
import ImageContainer from '../ImageContainer';
import FormInput from '../FormInput/';
import Button from '../Button';

export default function AccountForm() { 
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("");
    const [adress, setAdress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   
    return (
        <div className="ProductForm">
            <div>
                <h1 className='font-bolder ProductForm-title'>Edit Product</h1>
            </div>
            <div>
                <h2 className='font-bolder ProductForm-subtitle'>Modify product information:</h2>
            </div>
            <div>
                <form>
                    <FormInput
                        title="Name"
                        placeholder='Current Name'
                        value={name}
                        setValue={setName}
                        type={"text"}
                    />
                    <FormInput
                        title={"Image"}
                        placeholder={'Current File'}
                        value={image}
                        setValue={setImage}
                        type={"file"}
                    />
                    <FormInput
                        title="Phone"
                        placeholder='Current Phone Number'
                        value={phone}
                        setValue={setPhone}
                        type={"text"}
                    />
                    <FormInput
                        title="Adress"
                        placeholder='Current Adress'
                        value={adress}
                        setValue={setAdress}
                        type={"text"}
                    />
                    <FormInput
                        title="Email"
                        placeholder='Current Email'
                        value={email}
                        setValue={setEmail}
                        type={"email"}
                    />
                    <FormInput
                        title="Password"
                        placeholder='Current Password'
                        value={password}
                        setValue={setPassword}
                        type={"password"}
                    />
                    
                    <Button orange >
                        <img src={plus}/>
                        <h5 className="font-bolder">Register</h5>
                    </Button>
                </form>
            </div>
        </div>
    );
}
/*
    This file defines form for account data
*/


import {React, useState} from "react";
import plus from '../../assets/plus-circle.svg';
import './styles.css'
import ImageContainer from '../ImageContainer';
import Button from '../Button';
import FormInput from '../FormInput';

export default function AccountForm({
    title = "Default Title",
    description = "Default Description",
    buttonText = "Default Text",
    style = {},
    isAdmin = false,
    isRegister = false,
    onClick = () =>{},
    ...props
}) { 
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("");
    const [adress, setAdress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    let buttonHasImage=true;

    return (
        <div className="AccountForm">
            <div>
                <h1 className='font-bolder AccountForm-title'>{title}</h1>
            </div>
            <div>
                <p className='font-bolder'>{description}</p>
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
                        <img src={plus} hidden={buttonHasImage}/>
                        <h5 className="font-bolder">{buttonText}</h5>
                    </Button>
                </form>
            </div>
        </div>
    );
}
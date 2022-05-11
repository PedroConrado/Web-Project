/*
    This file defines form for account data
*/


import {React, useState} from "react";
import plus from '../../assets/plus-circle.svg';
import './AccountFormStyles.css'
import ImageContainer from '../ImageContainer';
import Row from '../AdminFormRow/AdminFormRow.js';
import Button from '../Button';

export default function AccountForm({
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
    
    let buttonText="Save Changes"
    let title="Edit Your Account"
    let subtitle="Modify your account information:"
    let buttonHasImage=true;
    if(isRegister){
        buttonText="Register"
        buttonHasImage=false
        if(isAdmin){
            title="Register Administrator"
            subtitle="Enter the information to register an administrator:"
        }
        else{
            title="Register Client"
            subtitle="Enter the information to register a client:"
        }
    }

    return (
        <div className="AccountForm">
            <div>
                <h3 className='font-extraBold AccountForm-title'>{title}</h3>
            </div>
            <div>
                <p className='font-bolder'>{subtitle}</p>
            </div>
            <div>
                <form>
                    <Row
                        title="Name"
                        placeholder='Current Name'
                        value={name}
                        setValue={setName}
                        type={"text"}
                    />
                    <Row
                        title={"Image"}
                        placeholder={'Current File'}
                        value={image}
                        setValue={setImage}
                        type={"file"}
                        hasImage={true}
                        imageSrc={require("../../assets/AsicsShoes.png")}
                    />
                    <Row
                        title="Phone"
                        placeholder='Current Phone Number'
                        value={phone}
                        setValue={setPhone}
                        type={"text"}
                    />
                    <Row
                        title="Adress"
                        placeholder='Current Adress'
                        value={adress}
                        setValue={setAdress}
                        type={"text"}
                    />
                    <Row
                        title="Email"
                        placeholder='Current Email'
                        value={email}
                        setValue={setEmail}
                        type={"email"}
                    />
                    <Row
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
/*
    This file defines form for account data but with only the fields that an admin can see and edit
*/


import {React, useState} from "react";
import plus from '../../assets/plus-circle.svg';
import './styles.css'
import ImageContainer from '../ImageContainer';
import Button from '../Button';
import FormInput from '../FormInput';

export default function ShortAccountForm({
    title = "Default Title",
    //my-account-admin/client="Edit Your Account"
    //add-client="Register Client"
    //add-admin="Register Administrator"
    //popup=""
    description = "Default Description",
    //my-account-admin/client="Modify your account information:"
    //add-client="Enter the information to register a client:"
    //add-admin="Enter the information to register an administrator:"
    //popup=""

    buttonText = "Default Text",
    //my-account-admin/client="Save Changes:"
    //add-client="Register"
    //add-admin="Register"
    //popup="Save Changes"

    style = {},
    isAdmin = false,
    isRegister = false,
    onClick = () =>{},
    link=false,
    to = "/",
    ...props
}) { 
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("");
    const [adress, setAdress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="ShortAccountForm">
            <form className="ShortAccountForm-form">
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
                
                <Button orange link={link} to={to}>
                    <p className="font-bolder">Save Changes</p>
                </Button>
            </form>
        </div>
    );
}
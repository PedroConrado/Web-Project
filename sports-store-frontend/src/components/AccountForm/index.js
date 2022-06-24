/*
    This file defines form for account data
*/


import {React, useState} from "react";
//import plus from '/assets/plus-circle.svg';
import './styles.css'
import ImageContainer from '../ImageContainer';
import Button from '../Button';
import FormInput from '../FormInput';
import User from "../../classes/User";

export default function AccountForm({
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
    onSubmit = () =>{},
    accountData={},
    link = false,
    to="",
    ...props
}) { //recieve an account object and set values of form to that account
    //onsubmit should call a function passed to this form that updates account if there is one or creates a new account if its null
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        if(name=="" || email=="" || password=="") return null;
        let newUserData={
            name: name,
            email: email,
            password: password,
            phone: phone,
            address: address,
            profilePicture: "",
            isAdmin: isAdmin,
        }
        console.log(newUserData)
        await User.addUser(newUserData);
    }

    return (
        <div className="AccountForm">
            <h4 className='font-bolder AccountForm-title'>{title}</h4>
            <p className='font-bolder'>{description}</p>
            <form className="AccountForm-form" onSubmit={handleSubmit}>
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
                    type={"image"}
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
                    placeholder='Current Address'
                    value={address}
                    setValue={setAddress}
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
                
                <Button orange link={link} to={to} type="submit">
                    <img src={"/assets/plus-circle.svg"} hidden={!isRegister}/>
                    <p className="font-bolder">{buttonText}</p>
                </Button>
            </form>
        </div>
    );
}
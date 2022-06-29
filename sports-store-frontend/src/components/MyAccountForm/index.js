/*
    This file defines form for myAccount data
*/


import {React, useState, useEffect} from "react";
//import plus from '/assets/plus-circle.svg';
import './styles.css'
import ImageContainer from '../ImageContainer';
import Button from '../Button';
import FormInput from '../FormInput';

import { useParams } from "react-router-dom";
import User from "../../classes/User";

export default function AccountForm({
    title = "Default Title",
    description = "Default Description",
    buttonText = "Default Text",
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
    const [user, setUser] = useState({})
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const params = useParams();
    useEffect(() => {
        const loadAll = async () => {
            const user = await User.getUserById(parseInt(params.userID));
            setUser(user);
            setName(user.name)
            setImage(user.profilePicture.replace("/assets/", ''))
            setPhone(user.phone)
            setAddress(user.address)
            setEmail(user.email)
            setPassword(user.password)
        }
    
      loadAll();
    }, [])
    
    const handleSubmit = async (e) => {
        if(name=="" || email=="" || password=="") return null;
        if(image=="") image="defaultAccount.png";
        console.log("here")
        let newUserData={
            id: parseInt(params.userID),
            name: name,
            email: email,
            password: password,
            phone: phone,
            address: address,
            profilePicture: image,
            isAdmin: user.isAdmin,
        }
        console.log(newUserData)
        e.preventDefault();
        await User.updateUser(newUserData);
        window.location.reload()
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
                    placeholder={'File name in public/assets or link'}
                    value={image}
                    setValue={setImage}
                    type={"text"}
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
                    <p className="font-bolder">Save Changes</p>
                </Button>
            </form>
        </div>
    );
}
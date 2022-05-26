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
    const params = useParams();
    useEffect(() => {
        const loadAll = async () => {
            const user = await User.getUserById(parseInt(params.userID));
            setUser(user);
        }
    
      loadAll();
    }, [])

    return (
        <div className="AccountForm">
            <h4 className='font-bolder AccountForm-title'>{title}</h4>
            <p className='font-bolder'>{description}</p>
            <form className="AccountForm-form">
                <FormInput
                    title="Name"
                    placeholder='Current Name'
                    value={user.name}
                    type={"text"}
                />
                <FormInput
                    title={"Image"}
                    placeholder={'Current File'}
                    value={user.profilePicture}
                    type={"image"}
                />
                <FormInput
                    title="Phone"
                    placeholder='Current Phone Number'
                    value={user.phone}
                    type={"text"}
                />
                <FormInput
                    title="Adress"
                    placeholder='Current Adress'
                    value={user.address}
                    type={"text"}
                />
                <FormInput
                    title="Email"
                    placeholder='Current Email'
                    value={user.email}
                    type={"email"}
                />
                <FormInput
                    title="Password"
                    placeholder='Current Password'
                    value={user.password}
                    type={"password"}
                />
                
                <Button orange link={link} to={to} type="submit">
                    <p className="font-bolder">Save Changes</p>
                </Button>
            </form>
        </div>
    );
}
/*
    This file defines form for account data but with only the fields that an admin can see and edit
*/


import {React, useState} from "react";
import './styles.css'
import Button from '../Button';
import FormInput from '../FormInput';

export default function AccountFormPopup({
    style = {},
    isAdmin = false,
    isRegister = false,
    accountData={},
    handleClose=()=>{},
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

    return(
        <div className="AccountFormPopup-popupBox" modal nested>
            <div className="AccountFormPopup">
                <form className="AccountFormPopup-form">
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
                        placeholder='Current Adress'
                        value={adress}
                        setValue={setAdress}
                        type={"text"}
                    />
                    <div className='accountFormPopup-buttons-container'>
                        <Button red onClick={handleClose}>
                            <p className="font-bolder">Save Changes</p>
                        </Button>
                        <Button orange onClick={handleClose}>
                            <p className="font-bolder">Close</p>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
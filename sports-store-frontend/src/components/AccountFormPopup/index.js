/*
    This file defines form for account data but with only the fields that an admin can see and edit
*/


import {React, useState} from "react";
import './styles.css'
import Button from '../Button';
import FormInput from '../FormInput';
import User from "../../classes/User";

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
}) { //recieve an account object and set values of form to that account
    //onsubmit should call a function passed to this form that updates account
    const [name, setName] = useState(accountData.name);
    const [image, setImage] = useState(accountData.profilePicture.replace("/assets/", ''));
    const [phone, setPhone] = useState(accountData.phone);
    const [address, setAddress] = useState(accountData.address);

    const handleSubmit = async (e) => {
        if(name=="") return null;
        if(image=="") image="defaultAccount.png";
        let newUserData={
            id: accountData.id,
            name: name,
            email: accountData.email,
            password: accountData.password,
            phone: phone,
            address: address,
            profilePicture: image,
            isAdmin: accountData.isAdmin,
        }
        console.log(newUserData)
        e.preventDefault();
        await User.updateUser(newUserData);
        window.location.reload()
    }

    return(
        <div className="AccountFormPopup-popupBox">
            <div className="AccountFormPopup">
                <form className="AccountFormPopup-form" onSubmit={handleSubmit}>
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
                        placeholder='Current Address'
                        value={address}
                        setValue={setAddress}
                        type={"text"}
                    />
                    <div className='accountFormPopup-buttons-container'>
                        <Button red onClick="handleSubmit(); handleClose()" type="submit">
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
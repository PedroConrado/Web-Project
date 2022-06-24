/*
    This file contains a input component whose style is going to be used throught
    the entire system

*/


import {React, useState} from "react";

import './styles.css'

import Button from '../Button';
import AccountFormPopup from '../AccountFormPopup';
import ConfirmCancelPopup from '../ConfirmCancelPopup';
import User from "../../classes/User";


export default function EditRemoveAccountContainer({
    style = {},
    itemName = "",
    isAdmin=false,
    item,
}){
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isOpenRemove, setIsOpenRemove] = useState(false);
 
    const togglePopupEdit = () => {
        setIsOpenEdit(!isOpenEdit);
    }
    const togglePopupRemove = () => {
        setIsOpenRemove(!isOpenRemove);
    }
    const togglePopupDelete = () => {
        setIsOpenRemove(!isOpenRemove);
        User.removeUser(item.id);
    }
    return(
        <>
            <div className='edit-remove-AccountContainer'>
                <p className='font-extraBold'>{itemName}</p>
                <Button orange onClick={togglePopupEdit}>
                    <p className="font-bolder">Edit Data</p>
                </Button>
                <Button red onClick={togglePopupRemove}>
                    <p className="font-bolder">Remove</p>
                </Button>
            </div>

            {isOpenEdit && <AccountFormPopup handleClose={togglePopupEdit} accountData={item}/>}
            {isOpenRemove && <ConfirmCancelPopup title="Are you sure you want to delete this account?" handleDelete={togglePopupDelete} handleClose={togglePopupRemove} item={item}/>}
        </>
    );
};
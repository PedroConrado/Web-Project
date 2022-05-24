/*
    This file contains a input component whose style is going to be used throught
    the entire system

*/


import {React, useState} from "react";

import './styles.css'

import Button from '../Button';
import AccountFormPopup from '../AccountFormPopup';
import ConfirmCancelPopup from '../ConfirmCancelPopup';


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

            {isOpenEdit && <AccountFormPopup handleClose={togglePopupEdit}/>}
            {isOpenRemove && <ConfirmCancelPopup title="Are you sure you want to delete this account?" handleClose={togglePopupRemove}/>}
        </>
    );
};
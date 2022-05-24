/*
    This file contains a input component whose style is going to be used throught
    the entire system

*/


import {React, useState} from "react";

import './styles.css'

import Button from '../Button';
import ImageContainer from '../ImageContainer';
import ProductFormPopup from '../ProductFormPopup';
import ConfirmCancelPopup from '../ConfirmCancelPopup';

export default function EditRemoveProductContainer({
    style = {},
    itemName = "",
    productData = {},
    productPreviewImageSrc="",
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
            <div className='edit-remove-ProductContainer'>
                <p className='font-extraBold'>{itemName}</p>
                <ImageContainer
                    src={productPreviewImageSrc}
                />
                <Button orange onClick={togglePopupEdit}>
                    <p className="font-bolder">Edit Data</p>
                </Button>
                <Button red onClick={togglePopupRemove}>
                    <p className="font-bolder">Remove</p>
                </Button>
            </div>

            {isOpenEdit && <ProductFormPopup handleClose={togglePopupEdit}/>}
            {isOpenRemove && <ConfirmCancelPopup title="Are you sure you want to delete this product?" handleClose={togglePopupRemove}/>}
        </>
    );
};
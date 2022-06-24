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
import ThreeDPopup from '../3DModelPopup';
import Product from "../../classes/Product";


export default function EditRemoveProductContainer({
    style = {},
    itemName = "",
    productPreviewImageSrc="",
    item,
}){
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isOpenRemove, setIsOpenRemove] = useState(false);
    const [isOpen3dModel, setIsOpen3dModel] = useState(false);
    const [isNotDeleted, setIsNotDeleted] = useState(true);
 
    const togglePopupEdit = () => {
        setIsOpenEdit(!isOpenEdit);
    }
    const togglePopupRemove = () => {
        setIsOpenRemove(!isOpenRemove);
    }
    const togglePopupDelete = () => {
        setIsNotDeleted(false);
        setIsOpenRemove(!isOpenRemove);
        Product.removeProduct(item.id);
    }
    const togglePopup3d = () => {
        setIsOpen3dModel(!isOpen3dModel);
    }

    return(
        <>
            {isNotDeleted &&
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
                <Button gray onClick={setIsOpen3dModel}>
                    <p className="font-bolder">3D Model</p>
                </Button>
            </div>
            }

            {isOpenEdit && <ProductFormPopup handleClose={togglePopupEdit} productData={item}/>}
            {isOpenRemove && <ConfirmCancelPopup title="Are you sure you want to delete this product?" handleDelete={togglePopupDelete} handleClose={togglePopupRemove} item={item}/>}
            {isOpen3dModel && <ThreeDPopup handleClose={togglePopup3d} productData={item}/>}
        </>
    );
};
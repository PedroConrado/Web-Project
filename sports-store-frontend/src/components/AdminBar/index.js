/*
    This file defines navigation bar of the administrator pages
*/


import {React, useState, useEffect} from "react";
import line from '../../assets/line.svg';
import './styles.css'
import Button from '../Button';

function getButtonClass(btnNmbr, currPage){
    if(btnNmbr==currPage) return true;
    return false;
}

export default function AdminBar() {
    const [page,  setPage] = useState(0);

    return (
        <div className="adminBar">
            <h4 className='font-extraBold'>Admin Name</h4>
            <h5 className='font-extraBold color-orange'>Actions</h5>
            <Button onClick={()=> setPage(0)} adminBar orange={getButtonClass(0, page)} gray={!getButtonClass(0, page)}>
                <p className="font-bolder">Add New Admin</p>
            </Button>
            <Button onClick={()=> setPage(1)} adminBar orange={getButtonClass(1, page)} gray={!getButtonClass(1, page)}>
                <p className="font-bolder">View Admins</p>
            </Button>
            <img class="line" src={line} />
            <Button onClick={()=> setPage(2)} adminBar orange={getButtonClass(2, page)} gray={!getButtonClass(2, page)}>
                <p className="font-bolder">Add New Client</p>
            </Button>
            <Button onClick={()=> setPage(3)} adminBar orange={getButtonClass(3, page)} gray={!getButtonClass(3, page)}>
                <p className="font-bolder">View Clients</p>
            </Button>
            <img class="line" src={line} />
            <Button onClick={()=> setPage(4)} adminBar orange={getButtonClass(4, page)} gray={!getButtonClass(4, page)}>
                <p className="font-bolder">Add New Product</p>
            </Button>
            <Button onClick={()=> setPage(5)} adminBar orange={getButtonClass(5, page)} gray={!getButtonClass(5, page)}>
                <p className="font-bolder">View Products</p>
            </Button>
            <img class="line" src={line} />
            <Button onClick={()=> setPage(6)} adminBar orange={getButtonClass(6, page)} gray={!getButtonClass(6, page)}>
                <p className="font-bolder">My Account</p>
            </Button>
            <img class="line" src={line} />
            <Button onClick={()=> setPage(7)} adminBar orange={getButtonClass(7, page)} gray={!getButtonClass(7, page)}>
                <p className="font-bolder">Logout</p>
            </Button>
        </div> 
    );
}
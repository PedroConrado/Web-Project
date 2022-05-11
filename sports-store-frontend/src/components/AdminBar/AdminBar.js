/*
    This file defines navigation bar of the administrator pages
*/


import {React, useState} from "react";
import line from '../../assets/line.svg';
import './AdminBarStyles.css'

function getButtonClass(btnNmbr, currPage){
    let classes="btn buttonOff";
    if(btnNmbr==currPage) classes="btn buttonOn";
    return classes;
}

export default function AdminBar() {
    const [page,  setPage] = useState(0);
    
    return (
        <div className="adminBar">
            <h1 className='barTitle'>Admin Name</h1>
            <h2 className='barSubtitle'>Actions</h2>
            <button onClick={()=> setPage(0)} className={getButtonClass(0, page)}>Add New Admin</button>
            <button onClick={()=> setPage(1)} className={getButtonClass(1, page)}>View Admins</button>
            <img class="line" src={line} />
            <button onClick={()=> setPage(2)} className={getButtonClass(2, page)}>Add New Client</button>
            <button onClick={()=> setPage(3)} className={getButtonClass(3, page)}>View Client</button>
            <img class="line" src={line} />
            <button onClick={()=> setPage(4)} className={getButtonClass(4, page)}>Add New Product</button>
            <button onClick={()=> setPage(5)} className={getButtonClass(5, page)}>View Products</button>
            <img class="line" src={line} />
            <button onClick={()=> setPage(6)} className={getButtonClass(6, page)}>My Account</button>
            <img class="line" src={line} />
            <button onClick={()=> setPage(7)} className={getButtonClass(7, page)}>Logout</button>
        </div> 
    );
}
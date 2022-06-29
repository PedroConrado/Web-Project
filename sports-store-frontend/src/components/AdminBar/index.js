/*
    This file defines navigation bar of the administrator pages
*/


import {React, useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import './styles.css'
import Button from '../Button';
import User from "../../classes/User";
import ImageContainer from '../ImageContainer';




function getButtonClass(btnNmbr, currPage){
    if(btnNmbr==currPage) return true;
    return false;
}
//test using parameter instead of state
export default function AdminBar({page=0}) {
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
        <div className="adminBar">
            <div  className='centerImage'>
            <ImageContainer
                src={user.profilePicture}
            /></div>
            <h4 className='font-extraBold center'>{user.name}</h4>
            
            <h5 className='font-extraBold color-orange'>Actions</h5>
            <Button adminBar orange={getButtonClass(0, page)} gray={!getButtonClass(0, page)} link to={"/admin-addAdmin/"+user.id}>
                <p className="font-bolder">Add New Admin</p>
            </Button>
            <Button adminBar orange={getButtonClass(1, page)} gray={!getButtonClass(1, page)} link to={"/admin-viewAdmins/"+user.id}>
                <p className="font-bolder">View Admins</p>
            </Button>
            <img className="line" src={"/assets/line.svg"} />
            <Button adminBar orange={getButtonClass(2, page)} gray={!getButtonClass(2, page)} link to={"/admin-addClient/"+user.id}>
                <p className="font-bolder">Add New Client</p>
            </Button>
            <Button adminBar orange={getButtonClass(3, page)} gray={!getButtonClass(3, page)} link to={"/admin-viewClients/"+user.id}>
                <p className="font-bolder">View Clients</p>
            </Button>
            <img className="line" src={"/assets/line.svg"} />
            <Button adminBar orange={getButtonClass(4, page)} gray={!getButtonClass(4, page)} link to={"/admin-addProduct/"+user.id}>
                <p className="font-bolder">Add New Product</p>
            </Button>
            <Button adminBar orange={getButtonClass(5, page)} gray={!getButtonClass(5, page)} link to={"/admin-viewProducts/"+user.id}>
                <p className="font-bolder">View Products</p>
            </Button>
            <img className="line" src={"/assets/line.svg"} />
            <Button adminBar orange={getButtonClass(6, page)} gray={!getButtonClass(6, page)} link to={"/admin-myAccount/"+user.id}>
                <p className="font-bolder">My Account</p>
            </Button>
            <img className="line" src={"/assets/line.svg"} />
            <Button adminBar orange={getButtonClass(7, page)} gray={!getButtonClass(7, page)} link to="/">
                <p className="font-bolder">Logout</p>
            </Button>
        </div> 
    );
}
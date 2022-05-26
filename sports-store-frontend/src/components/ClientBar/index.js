/*
    This file defines navigation bar of the administrator pages
*/


import {React, useState, useEffect} from "react";
import './styles.css'

import ImageContainer from '../ImageContainer';
import Button from '../Button';

import { useParams } from "react-router-dom";
import User from "../../classes/User";

//test using parameter instead of state
export default function ClientBar() {
    const params = useParams();
    const [user, setUser] = useState({})
    useEffect(() => {
        const loadAll = async () => {
            const user = await User.getUserById(parseInt(params.userID));
            setUser(user);
        }
    
      loadAll();
    }, [])
    return (
        <div className="clientBar">
            <h5 className='font-extraBold color-orange'>{user.name}</h5>
            <Button clientBar link to={"/client-homePage/"+user.id}>
                <img className="clientBar-icon"
                    src={"/assets/Home.png"}
                />
            </Button>
            <Button clientBar link to={"/client-shipping/"+user.id}>
                <img className="clientBar-icon"
                    src={"/assets/Cart.png"}
                />
            </Button>
            <Button clientBar link to={"/client-myAccount/"+user.id}>
                <img className="clientBar-icon"
                    src={"/assets/MyAccount.png"}
                />
            </Button>
            <Button clientBar link to="/">
                <img className="clientBar-icon"
                    src={"/assets/Logout.png"}
                />
            </Button>
        </div> 
    );
}
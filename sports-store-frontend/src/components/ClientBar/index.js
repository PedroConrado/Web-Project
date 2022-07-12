/*
    This file defines navigation bar of the administrator pages
*/


import {React, useState, useEffect} from "react";
import './styles.css'

import ImageContainer from '../ImageContainer';
import Button from '../Button';

import { useParams } from "react-router-dom";
import User from "../../classes/User";

import {Link, useNavigate} from 'react-router-dom';

//test using parameter instead of state
export default function ClientBar() {
    const params = useParams();
    const [user, setUser] = useState({})
    const navigate = useNavigate();
    useEffect(() => {
        const loadAll = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
            if(user===null  || user.isAdmin===true){
                localStorage.clear();
                navigate('/');
            }
            setUser(user);
        }
    
      loadAll();
    }, [])

    async function logout() {
        localStorage.clear();
        navigate('/');
    }

    return (
        <div className="clientBar">
            <ImageContainer
                src={user.profilePicture}
            />
            <h5 className='font-extraBold color-orange'>{user.name}</h5>
            <Button clientBar link to={"/client-homePage"}>
                <img className="clientBar-icon"
                    src={"/assets/Home.png"}
                />
            </Button>
            <Button clientBar link to={"/client-shipping"}>
                <img className="clientBar-icon"
                    src={"/assets/Cart.png"}
                />
            </Button>
            <Button clientBar link to={"/client-myAccount"}>
                <img className="clientBar-icon"
                    src={"/assets/MyAccount.png"}
                />
            </Button>
            <Button clientBar onClick={logout}>
                <img className="clientBar-icon"
                    src={"/assets/Logout.png"}
                />
            </Button>
        </div> 
    );
}
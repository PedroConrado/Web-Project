/*
    This file defines a list of accounts for the admin to view and choose to edit or remove
*/


import {React, useState, useEffect} from "react";
//import plus from '/assets/plus-circle.svg';
import './styles.css'

import EditRemoveAccount from "../EditRemoveAccountContainer";
import User from "../../classes/User";
//import {getList, getAdminList, getClientList} from "../../AccountManager";


export default function AdminViewAccountsList({
    title = "Default Title",
    style = {},
    isAdmin = false,
    ...props
}) {
    const [accounts, setAccounts] = useState([]);
    useEffect(() => {
        const loadAll = async () => {
            let accounts=[]
            if(isAdmin){
                let adminList = await User.getAdmins();
                accounts = accounts.concat(adminList)               
            }
            else{
                let clientList = await User.getClients();
                accounts = accounts.concat(clientList) 
            }
            setAccounts(accounts)
        }
    
      loadAll();
    }, [])
    return (
        <div className="admin-view-accountsList">
            <h4 className='font-bolder'>{title}</h4>
            {accounts.length > 0 && accounts.map((account,key)=>(
                <div key={key}>
                    <EditRemoveAccount
                        item={account}
                        itemName={account.name} isAdmin={isAdmin}
                    />
                </div>
            ))}
        </div>
    );
}
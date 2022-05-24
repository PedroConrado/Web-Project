/*
    This file defines a list of accounts for the admin to view and choose to edit or remove
*/


import {React, useState} from "react";
import plus from '../../assets/plus-circle.svg';
import './styles.css'

import EditRemoveAccount from "../EditRemoveAccountContainer";

export default function AccountForm({
    title = "Default Title",
    style = {},
    isAdmin = false,
    accountList = [],
    ...props
}) {
    /*
    Preciso modificar: busca a lista de todas as contas admin ou cliente e apresenta todas elas
    return (
        <div className="admin-view-accountsList">
            <h4 className='font-bolder'>{title}</h4>
            
            {
                this.state.accounts.map(account => {
                    return <EditRemoveAccount key={account.id} itemName={account.name} isAdmin={isAdmin}/>
                })
            }
        </div>
    );
    */
    return (
        <div className="admin-view-accountsList">
            <h4 className='font-bolder'>{title}</h4>
            
            <EditRemoveAccount itemName="Admin 1" isAdmin={isAdmin}/>
            <EditRemoveAccount itemName="Admin 2" isAdmin={isAdmin}/>
            <EditRemoveAccount itemName="Admin 1" isAdmin={isAdmin}/>
            <EditRemoveAccount itemName="Admin 2" isAdmin={isAdmin}/>
            <EditRemoveAccount itemName="Admin 1" isAdmin={isAdmin}/>
            <EditRemoveAccount itemName="Admin 2" isAdmin={isAdmin}/>
            <EditRemoveAccount itemName="Admin 1" isAdmin={isAdmin}/>
            <EditRemoveAccount itemName="Admin 2" isAdmin={isAdmin}/>
            <EditRemoveAccount itemName="Admin 1" isAdmin={isAdmin}/>
            <EditRemoveAccount itemName="Admin 2" isAdmin={isAdmin}/>
        </div>
    );
}
/*
    This file defines form for account data
*/


import React from "react";
import line from '../../assets/plus-circle.svg';

export default function AdminForm() {    
    return (
        <div className="adminForm">
            <div>
                <h1>Edit Your  Account</h1>
            </div>
            <div>
                <h2>Modify your account information:</h2>
            </div>
            <div>
                <form>
                    <div className='row'>
                        <p>Name</p>
                        <input type="text" name="nome" placeholder="currentName" required/>
                    </div>
                    <div className='row'>
                        <p>Image</p>
                        <input type="file" name="image" placeholder="currentImage" required/>
                        <img className='formImageDisplay' src="./currentImageSrc" alt='no image'></img>  
                    </div>
                    <div className='row'>
                        <p>Phone</p>
                        <input type="tel" name="telefone" placeholder="currentNumber" required/>
                    </div>
                    <div className='row'>
                        <p>Address</p>
                        <input type="text" name="endereco" placeholder="currentAdress" required/>
                    </div>
                    <div className='row'>
                        <p>Email</p>
                        <input type="email" name="email" placeholder="currentEmail" required/>
                    </div>
                    <div className='row'>
                        <p>Password</p>
                        <input type="password" name="senha" placeholder="currentPassword" required/>
                    </div>
                    <button className='btn buttonOn'><img src={plus} />Register</button>
                </form>
            </div>
        </div>
    );
}
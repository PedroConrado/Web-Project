/*
    This file contains a popup component which will 

*/

//MODIFY:
//make accountFormPopup, productFormPopup and confirmCancelPopup as seperate components each in one file (remove cancel component...)

import React from 'react';
import reactPopup from 'reactjs-popup';

import './styles.css'

export default function Popup({
    style = {},
    title = "",
    children,
    triggerPopup = false,
    value = "",
    setValue = () => {},
}){
    return (triggerPopup) ? (
        <div className='popup-container'>
            <Popup    trigger={triggerPopup} modal nested>
                {close => (
                    <div className="modal"> 
                        <button className="close" onClick={close}>
                            &times;
                        </button> 
                        <div className="content">

                        </div>
                        <div className="actions">
                            <button
                                className="button"
                                onClick={() => {close();}}
                            >
                                close modal
                            </button>
                        </div>
                    </div>
                )}
                {children}
            </Popup>
        </div>
    ) : "" ;
};
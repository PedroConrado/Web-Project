import React from 'react';

import './styles.css'
import Input from '../Input';

export default function ShippingFormInput({
    style = {},
    title = "",
    type = "text",
    placeholder = "",
    value = "",
    setValue = () => {},
   
}){

    return(
        <div className={style}>
                <h6 className='font-extraBold shippingFormInput'>{title}</h6>
                <Input
                    placeholder={placeholder}
                    value={value}
                    setValue={setValue}
                    filled={true}
                    type={type}
                />
        </div>
    );
};
/*
    This file contains the component that represents the
    Sign Up page.
*/


import React, { useLayoutEffect, useState } from 'react';
import DescriptionBanner from '../../components/DescriptionBanner';
import SignUpForm from '../../components/SignUpForm';

import './styles.css'


export default function SignUp() {
    const [windowWidth, setWindowWidth] = useState(0);

    useLayoutEffect(() => {
        function updateSize() {
            setWindowWidth(window.outerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
      }, []);
    return(
        <div className="sign-up-page-container">
            <SignUpForm />
            {
                windowWidth > 425 ?
                <DescriptionBanner />
                :
                null
            }
        </div>
    );
};
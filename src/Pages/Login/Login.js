//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 10 Sep 2022
//    Revision - 1
//    Project - HRMS
//    Component  - LoginForm.js
//    DESCRIPTION - 
//////////////////////////////////////////////////////////////////////////////////////
import React, { useEffect } from 'react'
import LoginForm from './LoginForm.js'
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    useEffect(() => {
        let token = JSON.parse(window.localStorage.getItem('token'))
        if (!token) {
            return navigate('/login')
        }
    });

    return (
        <>
            <div className='bg-gray-100 h-screen'>
                <div className='md:grid md:grid-cols-1'>
                    <div className='col-span-1 justify-self-center'>
                        <h1 className='text-3xl text-center font-semibold text-gray-800 md:my-8'>Login Page</h1>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

/*
Exported to -
1. App.js
*/

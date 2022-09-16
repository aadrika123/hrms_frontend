//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 10 Sep 2022
//    Revision - 1
//    Project - HRMS
//    Component  - LoginForm.js
//    DESCRIPTION - 
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect, useContext } from 'react';
import { Formik, Field } from 'formik';
import { MdVerified } from 'react-icons/md';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import jhlogo from '../../Assets/Images/jharkhand_logo.png';
import { contextVar } from '../../Components/Context/Context'

const SignupSchema = Yup.object().shape({


    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(3, 'Minimum Three character !')
        .max(50, 'Too Long!')
        .required('Required'),
    // .matches(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/, 'Password can only contain Latin letters.')

});

const LoginForm = () => {

    const { notify } = useContext(contextVar);


    const navigate = useNavigate();
    const [showMsg, setShowMsg] = useState()
    const [data, setData] = useState()


    useEffect(() => {
        axios.get("http://localhost:8000/login")
            .then((res) => {
                setData(res)
                // loginFun()
            })
            .catch(err => {
                console.log(err)
                console.log("Error in fetching", err)
            })
    }, [])

    const handleLogin = (values) => {
        data?.data.map((e) => {
            if (values.email === e.email && values.password === e.password) {
                localStorage.setItem("token", JSON.stringify("abcdefghijklmnop"))
                navigate("/Dashboard")
                notify('Login Successfully', 'success')
            } else {
                console.log("Wrong Credencial.")
            }
        })
    }

    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={SignupSchema}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        handleLogin(values)
                        // console.log("Login Data", values)
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <div className='border shadow-2xl'>
                        <form onSubmit={handleSubmit}>
                            <div className='grid bg-white px-10 '>
                                <div className='flex justify-center mt-3'>
                                    <img className=' h-14' src={jhlogo} alt="" />
                                </div>
                                <h1 className='text-center text-md font-semibold my-1 capitalize'>
                                    Human Resource Management System
                                </h1>

                                <div className='my-3 relative'>
                                    <div className='text-gray-600 static mb-1 font-semibold'>Email Address <span className='text-red-500 font-bold'>*</span></div>
                                    <input
                                        type="text"
                                        name="email"
                                        className='border border-gray-400 outline-blue-500 text-base rounded-md pl-2 h-10 w-72 shadow-sm'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    {errors.email && touched.email ? (
                                        <div className='text-red-600 text-sm absolute'>{errors.email}</div>
                                    ) : null}
                                </div>

                                <div className='my-3 relative'>
                                    <div className='text-gray-600 static mb-1 font-semibold'>Password <span className='text-red-500 font-bold'>*</span></div>
                                    <input
                                        type="password"
                                        name="password"
                                        className='border border-gray-400 outline-blue-500 text-base rounded-md pl-2 h-10 w-72 shadow-sm'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    {errors.password && touched.password ? (
                                        <div className='text-red-600 text-sm absolute'>{errors.password}</div>
                                    ) : null}
                                </div>
                                <div className='relative justify-center'>
                                    <div className='text-red-600 text-sm font-semibold absolute '> <span className=''> {showMsg}</span></div>
                                </div>
                                <div className='text-center mt-2'>
                                    {/* <p><Link to="/register" className='text-blue-600 font-semibold'> Create New Account</Link></p> */}
                                    {/* <p><Link to="/reset-password" className='text-blue-600 font-semibold'>Reset Password </Link></p> */}
                                    {/* <p className='flex justify-center'><p> Registration Pending ? </p> <Link to="/registrationStatus" className='text-blue-600 font-semibold ml-1'> Check Status </Link></p> */}
                                </div>

                                <div className='my-5 self-center justify-self-center'>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className='bg-green-600 hover:bg-green-700 px-5 shadow-xl h-10 w-72  rounded-md text-white text-lg font-semibold'>
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                )}
            </Formik>
        </div>
    );
}

export default LoginForm

/*
Exported to -
1. Login.js
*/


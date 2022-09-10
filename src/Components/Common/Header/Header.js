//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 10 Sep 2022
//    Revision - 1
//    Project - HRMS
//    Component  - Header.js
//    DESCRIPTION - This is header index file.
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import { useLocation } from 'react-router-dom'
import HeaderIcons from './HeaderIcons'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import logo from './logo1.png'



function Header() {
    const location = useLocation();
    return (
        <>
            {
                ((location.pathname != '/landing') && (location.pathname != '/') && (location.pathname != '/login') && (location.pathname != '/error')) && <div className="grid grid-cols-12 w-100 px-0 h-16 bg-white shadow-xl  z-50 relative animate__animated animate__fadeInDown" >                    
                    <div className="hidden sm:block col-span-0 sm:col-span-2">
                        <div className="grid grid-cols-12 place-items-center h-full">
                            <div className='col-span-2 col-start-2'><img style={{ 'width': '40px' }} src={logo} alt="hello" /></div>
                            <div className='col-span-9'><h4 className='text-blue-400 font-bold text-lg'>HRMS</h4></div>
                            {/* <div className='col-span-9'><h4 className='text-gray-800 font-bold text-lg'>JHARKHAND</h4></div> */}
                        </div>
                    </div>

                    <div className='col-span-9 sm:col-span-4 place-items-center'>
                        <div className="grid grid-cols-12 place-items-center h-full">
                            <div className='cursor-pointer bg-gray-100 p-2 rounded-lg' ><HiOutlineMenuAlt2 color='black' size={16} /></div>
                            <div className='col-span-10'><h4 className='text-gray-900 font-bold text-sm sm:text-lg text-center'>Human Resource Management System</h4></div>
                        </div>
                    </div>

                    {/* HeaderIcons contains action icons */}
                    <div className='col-span-3 place-items-center col-start-10'><HeaderIcons /></div>

                </div>
            }
        </>
    )
}

export default Header

/*
Exported to -
1. App.js
*/

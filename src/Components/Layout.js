//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 10 Sep 2022
//    Revision - 1
//    Project - HRMS
//    Component  - 
//    DESCRIPTION - 
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

const Layout = ({ children }) => {
    const location = useLocation();
    const [headerData, setHeaderData] = useState(true)

    const headerAction=()=>{
        setHeaderData(!headerData)
    }

    return (
        <>
            <Header headerAction={headerAction} />
            <div className='flex flex-auto'>
                {/* <Sidebar /> */}
                { ((location.pathname != '/landing') && (location.pathname != '/') && (location.pathname != '/login') && (location.pathname != '/error')) && <Sidebar headerData={headerData} />}
                <div className='grow'>
                    <div className='m-0'>{children}</div>
                </div>
            </div>
        </>
    )
}

export default Layout

/*
Exported to -
1. App.js
*/
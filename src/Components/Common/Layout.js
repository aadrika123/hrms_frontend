import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

const Layout = ({ children }) => {
    const location = useLocation();

    return (
        <>
            <Header />
            <div className='flex flex-auto'>
                {/* <Sidebar /> */}
                { ((location.pathname != '/landing') && (location.pathname != '/') && (location.pathname != '/login') && (location.pathname != '/error')) && <Sidebar />}
                <div className='grow'>
                    <div className='m-0'>{children}</div>
                </div>
            </div>
        </>
    )
}

export default Layout
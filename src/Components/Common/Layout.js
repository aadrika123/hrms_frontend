import React from 'react'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className='flex flex-auto'>
                <Sidebar />
                <div className='grow'>
                    <div className='m-5'>{children}</div>
                </div>
            </div>
        </>
    )
}

export default Layout
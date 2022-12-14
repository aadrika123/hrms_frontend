//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 11 Sep 2022
//    Revision - 1
//    Project - HRMS
//    Component  - 
//    DESCRIPTION - 
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { AiFillPieChart } from 'react-icons/ai'
import { SiFuturelearn } from 'react-icons/si'
import { SiOpenaccess } from 'react-icons/si'
import { AiFillDatabase } from 'react-icons/ai'
import { useEffect } from 'react'
// import Logo from '../assets/images/logo.svg'

const Sidebar = (props) => {
  const [open, setOpen] = useState(true)
  const location = useLocation()

  useEffect(() => {
    setOpen(!open)
    console.log("Sideabr Trigger..")
  }, [props.headerData])


  const Menus = [
    { title: 'Dashboard', path: '/dashboard', src: <AiFillPieChart /> },
    { title: 'Demo', path: '/demo', src: <SiFuturelearn /> },
    // {
    //   title: 'Master', path: '#', src: <AiFillDatabase />, subMenuStatus: true, subMenu: [
    //     { title: 'Master', path: '#', src: <AiFillDatabase /> }
    //   ]
    // },
    { title: 'Master', path: '/master', src: <AiFillDatabase /> },
    { title: 'Signin', path: '/login', src: <SiOpenaccess />, gap: 'true' },
  ]

  return (
    <>
      {/* {open && <div className='bg-red-500 h-screen overflow-auto w-52 z-50'>Menu</div> } */}

      <div className={`${open ? 'w-60' : 'md:block hidden'} relative h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}>
        {/* <BsArrowLeftCircle
          className={`${!open && 'rotate-180'} absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
          onClick={() => setOpen(!open)}
        /> */}
        <Link to='/'>
          <div className={`flex ${open && 'gap-x-4'} items-center`}>
            {/* <img src={Logo} alt='' className='pl-2' /> */}
            {open && (<span className='text-xl font-medium whitespace-nowrap dark:text-white'>HRMS</span>)}
          </div>
        </Link>

        <ul className='pt-6 hidden md:block'>
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li className={`flex items-center gap-x-4 p-2 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 ${menu.gap ? 'mt-9' : 'mt-2'} ${location.pathname === menu.path && 'bg-gray-200 dark:bg-gray-700'}`}>
                <span className='text-2xl'>{menu.src}</span>
                <span className={`${!open && 'hidden'} md:origin-left duration-300 hover:block`} >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
        <ul className='pt-6 md:hidden'>
          {Menus.map((menu, index) => (
            <Link onClick={()=>setOpen(false)} to={menu.path} key={index}>
              <li className={`flex items-center gap-x-4 p-2 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 ${menu.gap ? 'mt-9' : 'mt-2'} ${location.pathname === menu.path && 'bg-gray-200 dark:bg-gray-700'}`}>
                <span className='text-2xl'>{menu.src}</span>
                <span className={`${!open && 'hidden'} md:origin-left duration-300 hover:block`} >
                  {menu.title}xx
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Sidebar

/*
Exported to -
1. Layout.js
*/
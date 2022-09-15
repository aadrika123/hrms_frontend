//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 10 Sep 2022
//    Revision - 1
//    Project - HRMS
//    Component  - App.js
//    DESCRIPTION - This is App.js file.
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import { Button } from "@material-tailwind/react";
import { ImHome } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const naviage = useNavigate()

  const goHome=()=>{
    naviage('/dashboard')
  }

  return (
    <>
      <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-7xl dark:text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
            <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
            {/* <a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to homepage</a> */}
            <div className='flex justify-center'>
            <Button onClick={goHome} className='bg-indigo-600 hover:bg-indigo-400 text-white hover:text-black font-medium px-5 text-base py-2 mt-5 md:mt-0 rounded-sm shadow-xl capitalize flex'> <ImHome className='mt-1 mr-2' /> Home Page</Button>          
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ErrorPage

/*
Exported to -
1. App.js
*/

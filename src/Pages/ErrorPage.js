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

function ErrorPage() {
  // console.log(process.env)
  console.log(process.env.REACT_APP_TEST)
  console.log("Base URl is : ",process.env.REACT_APP_BASE_URL)
  return (
    <>
    <h1>Page not Found!</h1>
     ENV File test..
    </>
  )
}

export default ErrorPage

/*
Exported to -
1. App.js
*/

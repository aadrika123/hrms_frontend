//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 12 Sep 2022
//    Revision - 1
//    Project - HRMS
//    Component  - 
//    DESCRIPTION - 
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import { Navigate } from "react-router-dom";
function RedirectToErrorPage() {

    return (
        <>
            <Navigate to="/error" replace={true} />
        </>
    )
}

export default RedirectToErrorPage

/*
Exported to -
1. App.js
*/
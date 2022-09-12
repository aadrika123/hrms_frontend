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
import { Routes, Route, useNavigate } from 'react-router-dom';
function RedirectToErrorPage() {
    const naviage = useNavigate()
    return naviage('/error')
}

export default RedirectToErrorPage

/*
Exported to -
1. App.js
*/
//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 16 Sep 2022
//    Revision - 1
//    Project - HRMS
//    Component  - Protected.js
//    DESCRIPTION - 
//////////////////////////////////////////////////////////////////////////////////////
import React, { useEffect } from 'react'
import { useLocation, useNavigate, Navigate } from 'react-router-dom';

function Protected({ children,isLogin }) {

  const auth = isLogin;
  const location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}

export default Protected


/*
Exported to -
1. App.js
*/

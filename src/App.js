//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 10 Sep 2022
//    Revision - 1
//    Project - HRMS
//    Component  - App.js
//    DESCRIPTION - This is App.js file.
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Protected from './Components/Authentication/Protected';
import Layout from './Components/Layout';
import ErrorPage from './Pages/404/ErrorPage';
import RedirectToErrorPage from './Pages/404/RedirectToErrorPage';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login/Login';
import MasterIndex from './Pages/Master/MasterIndex';
import { contextVar } from './Components/Context/Context'

import { toast, ToastContainer } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';


function App() {


  //context Data to active toast from anywhere
  const contextData = {
    notify: (toastData, actionFlag) => {
      toast.dismiss()
      { actionFlag == 'error' && toast.error(toastData) }
      { actionFlag == 'info' && toast.info(toastData) }
      { actionFlag == 'success' && toast.success(toastData) }
      { actionFlag == 'warn' && toast.warn(toastData) }
    }
  };

  return (
    <>
      <contextVar.Provider value={contextData}>
        <Router>
          <Layout>
            <Routes>
              <Route index path="/dashboard" element={<Dashboard />} />
              <Route index path="/master" element={<MasterIndex />} />
              <Route path="login" element={<Login />} />
              <Route path='*' element={<RedirectToErrorPage />} />
              <Route path='/error' element={<ErrorPage />} />
            </Routes>
          </Layout>
        </Router>
      </contextVar.Provider>
    </>
  );
}

export default App;

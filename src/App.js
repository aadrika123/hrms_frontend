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
import Protected from './Components/Common/Authentication/Protected';
import Header from './Components/Common/Header/Header';
import Layout from './Components/Common/Layout';
import Sidebar from './Components/Common/Sidebar/Sidebar';
import Dashboard from './Pages/Dashboard';
import Demo from './Pages/Demo';
import ErrorPage from './Pages/ErrorPage';
import Login from './Pages/Login/Login';

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        {/* <Sidebar /> */}
        <Layout>
          <Routes>
            <Route index path="/Dashboard" element={<Dashboard />} />
            <Route path="demo" element={<Protected Component={Demo} />} />
            <Route path="login" element={<Login />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;

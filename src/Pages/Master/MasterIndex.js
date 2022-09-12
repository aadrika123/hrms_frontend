//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 10 Sep 2022
//    Revision - 1
//    Project - HRMS
//    Component  - MasterIndex.js
//    DESCRIPTION - 
//////////////////////////////////////////////////////////////////////////////////////
import { useState } from 'react'
import MailboxSidebar from '../../Components/MailboxComponents/MailboxSidebar'
import CompanyDetailsIndex from './CompanyDetails/CompanyDetailsIndex'
import DepartmentListIndex from './DepartmentList/DepartmentListIndex'

function MasterIndex() {
    const [tabIndex, settabIndex] = useState(0)     //state to store current tab index
    const tabs = [
        { title: "Company Details", tabIndex: 0 },
        { title: "Department List", tabIndex: 1 },
        { title: "Designation List", tabIndex: 2 }

    ]
    const tabSwitch = (index) => {        //tabSwitch function receive tabIndex to switch between tabs called from Sidebar menu
        settabIndex(index)      //updating the tab index to recent value
    }
    return (
        <>

            <div className="grid grid-cols-12 rounded-lg m-5 shadow-xl broder-2 border-sky-200 bg-gray-200">
                <div className='col-span-12 sm:col-span-2 '>
                    <MailboxSidebar tabs={tabs} fun={tabSwitch} /></div>
                {tabIndex == 0 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}> <CompanyDetailsIndex /> </div>}
                {tabIndex == 1 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}> <DepartmentListIndex /> </div>}
                {/* {tabIndex == 2 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}> <RoleWiseUserIndex /> </div>}      */}

            </div>
        </>
    )
}

export default MasterIndex

/*
Exported to -
1. App.js
*/
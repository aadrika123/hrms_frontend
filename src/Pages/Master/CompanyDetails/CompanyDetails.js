//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 15 Sep 2022
//    Revision - 1
//    Project - HRMS
//    Component  - CompanyDetails.js
//    DESCRIPTION - 
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import companyImage from '../../../Assets/illustration/companyImage.png'
import { Button } from "@material-tailwind/react";
import { FaEdit } from 'react-icons/fa';

function CompanyDetails(props) {
  return (
    <>
      {/* <div className='relative flex py-3 pl-5 bg-gradient-to-r from-indigo-200 via-purple-100 to-green-200'>
        <div className='font-semibold text-xl'>Company Details</div>
        {<div className='absolute inset-y-2 right-0 mr-2 md:mr-10'><button onClick={handleBackBtn} className='bg-indigo-600 hover:bg-indigo-400 hover:font-semibold hover:text-black px-4 py-1 text-base md:text-lg text-white rounded-sm shadow-2xl'>Back</button></div>}
      </div> */}

      <div className='border shadow-xl'>
        <div className='grid grid-cols-12 p-5 bg-red-50 leading-10'>
          <div className='md:col-span-2 col-span-12 flex justify-center'>
            <img src={companyImage} className="md:p-3 h-28 md:h-32" alt="" srcset="" />
          </div>
          <div className='md:col-span-5 col-span-12'>
            <div className='grid grid-cols-12'>
              <div className='col-span-4 font-medium'>
                <div>Name</div>
                <div>CIN No</div>
                <div>PAN No</div>
              </div>
              <div className='col-span-8 font-medium text-gray-600'>
                <div>Aadrika enterprises</div>
                <div>U67190TN2014PTC096978</div>
                <div>EXCPK5604R</div>
              </div>
            </div>
          </div>
          <div className='md:col-span-5 col-span-12 hr'>
            <div className='grid grid-cols-12'>
              <div className='col-span-4 font-medium'>
                <div>TIN No</div>
                <div>TDS No</div>
                <div>Website</div>
              </div>
              <div className='col-span-8 font-medium text-gray-600'>
                <div>656466862366655</div>
                <div>1645964978</div>
                <div>www.aadrikaenterprises.com</div>
              </div>
            </div>
          </div>
          <div className='col-span-12 flex justify-center md:my-5'>
            {/* <button className='bg-indigo-600 hover:bg-indigo-400 text-white hover:text-black font-medium px-3 py-1 mt-5 md:mt-0 rounded-sm shadow-xl hover:'>Update Details</button> */}
            <Button onClick={()=>props.hadleEditCompBtn(true)} className='bg-indigo-600 hover:bg-indigo-400 text-white hover:text-black font-medium px-5 text-base py-2 mt-5 md:mt-0 rounded-sm shadow-xl capitalize flex'> <FaEdit className='mt-1 mr-2' /> Edit Details</Button>
          </div>
        </div>
      </div>

    </>
  )
}

export default CompanyDetails

/*
Exported to -
1. CompanyDetailsIndex
*/

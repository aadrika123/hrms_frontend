//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 15 Sep 2022
//    Revision - 1
//    Project - HRMS
//    Component  - EditCompanyDetails.js
//    DESCRIPTION - 
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import companyImage from '../../../Assets/illustration/companyImage.png'
import { Button } from "@material-tailwind/react";
import { Formik, Field, Form } from 'formik';


function EditCompanyDetails(props) {
  return (
    <>
      <Formik
        initialValues={{
          companyName: '',
          cinNo: '',
          panNo: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <div className='border shadow-xl'>
          <Form>
            <div className='grid grid-cols-12 p-5 bg-sky-50 leading-8'>
              <div className='md:col-span-2 col-span-12 flex justify-center'>
                <img src={companyImage} className="md:p-3 h-28 md:h-32" alt="" srcset="" />
              </div>
              <div className='md:col-span-5 col-span-12'>
                <div className='grid grid-cols-12'>
                  <div className='col-span-4 font-medium leading-10'>
                    <div>Name</div>
                    <div>CIN No</div>
                    <div>PAN No</div>
                  </div>
                  <div className='col-span-8 font-medium text-gray-600'>
                    <div><Field className="my-1 px-2 border border-black rounded shadow-lg" id="companyName" name="companyName" placeholder="Aadrika enterprises" /></div>
                    <div><Field className="my-1 px-2 border border-black rounded shadow-lg" id="cinNo" name="cinNo" placeholder="U67190TN2014PTC096978" /></div>
                    <div><Field className="my-1 px-2 border border-black rounded shadow-lg" id="panNo" name="panNo" placeholder="EXCPK5604R" /></div>
                  </div>
                </div>
              </div>
              <div className='md:col-span-5 col-span-12 hr'>
                <div className='grid grid-cols-12'>
                  <div className='col-span-4 font-medium leading-10'>
                    <div>TIN No</div>
                    <div>TDS No</div>
                    <div>Website</div>
                  </div>
                  <div className='col-span-8 font-medium text-gray-600'>
                    <div><Field className="my-1 px-2 border border-black rounded shadow-lg" id="TINno" name="TINno" placeholder="656466862366655" /></div>
                    <div><Field className="my-1 px-2 border border-black rounded shadow-lg" id="TDSno" name="TDSno" placeholder="1645964978" /></div>
                    <div><Field className="my-1 px-2 border border-black rounded shadow-lg" id="companyWebsite" name="companyWebsite" placeholder="www.aadrikaenterprises.com" /></div>
                  </div>
                </div>
              </div>
              <div className='col-span-12 flex justify-center md:my-5'>
                {/* <button className='bg-indigo-600 hover:bg-indigo-400 text-white hover:text-black font-medium px-3 py-1 mt-5 md:mt-0 rounded-sm shadow-xl hover:'>Update Details</button> */}
                <Button type="submit" className='bg-indigo-600 hover:bg-indigo-400 text-white hover:text-black font-medium px-5 mx-2 text-base py-1 mt-5 md:mt-0 rounded-sm shadow-xl capitalize'>Update</Button>
                <Button onClick={(e)=>props.hadleCancelBtn(false)} className='bg-red-600 hover:bg-red-400 text-white hover:text-black font-medium px-5 mx-2 text-base py-1 mt-5 md:mt-0 rounded-sm shadow-xl capitalize'>Cancel</Button>
              </div>
            </div>
          </Form>
        </div>
      </Formik>
    </>
  )
}

export default EditCompanyDetails
/*
Exported to -
1. CompanyDetailsIndex
*/

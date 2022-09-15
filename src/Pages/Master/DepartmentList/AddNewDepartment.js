import React, { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import usePostHookAxios from '../../../Components/Common/CustomHooks/usePostHookAxios';
import { useState, useEffect } from 'react';
import { contextVar } from '../../../Components/Context/Context'


const AddNewDepartment = (props) => {
  const { notify } = useContext(contextVar);

  const baseURL = process.env.REACT_APP_BASE_URL;

  const goBack = () => {
    props.handleBackBtn()
  }

  //Add new record
  const submitFormData = (data) => {
    axios({
      method: "post",
      url: `${baseURL}/DepartmentList`,
      data: {
        "name": data.DepartmentName,
        "descriptoin": data.description,
        "status": data.DepartmentStatus,
      },
    })
      .then(function (response) {
        console.log("Data Added..", response)
        notify('Department Added Successfully', 'success')
        goBack()
      })
      .catch(function (response) {
        console.log("Failed to update Data", response);
      });

  }

  return (
    <Formik
      initialValues={{ DepartmentName: '', description: '', DepartmentStatus: true }}
      validationSchema={Yup.object({
        DepartmentName: Yup.string()
          .max(50, 'Must be 50 characters or less')
          .required('Required'),
        description: Yup.string()
          .max(50, 'Must be 50 characters or less')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
          submitFormData(values)
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <div className='md:py-10 md:px-60'>
          <div className='grid grid-cols-12 justify-items-center bg-red-100 py-8 border border-red-200 rounded-sm shadow-2xl'>
            <div className='col-span-12 relative'>
              <label className='text-lg md:text-base font-semibold md:font-normal' htmlFor="DepartmentName">Department Name</label>
              <p><Field className="my-1 px-2 border w-72 md:w-60 h-10 md:h-7 outline-blue-600 border-black rounded-sm shadow-md" name="DepartmentName" type="text" /></p>
              <p className='text-red-600 text-sm font-semibold absolute'><ErrorMessage name="DepartmentName" /></p>
            </div>
            <div className='col-span-12 relative mt-5 mb-3'>
              <label className='text-lg md:text-base font-semibold md:font-normal' htmlFor="description">Description</label>
              <p><Field className="px-2 border w-72 md:w-60 h-10 md:h-7 outline-blue-600 border-black rounded-sm shadow-md" name="description" type="text" /></p>
              <p className='text-red-600 text-sm font-semibold absolute'><ErrorMessage name="description" /></p>
            </div>
            <div className='col-span-12 flex my-2'>
              <label htmlFor="DepartmentStatus" className='text-lg md:text-base font-semibold md:font-normal'>Is Active ?</label>
              <p className='justify-center ml-2'><Field name="DepartmentStatus" type="checkbox" /></p>
              <ErrorMessage name="DepartmentStatus" />
            </div>
            <div className='col-span-12'>
              <button className='bg-green-500 px-2 py-1 rounded-sm shadow-md hover:shadow-2xl hover:bg-green-400' type="submit">Add Department</button>
              <button onClick={goBack} className='bg-red-500 px-4 py-1 mx-2 rounded-sm hover:shadow-2xl hover:bg-red-600 shadow-lg'>Cancel</button>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
export default AddNewDepartment
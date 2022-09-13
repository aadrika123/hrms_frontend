import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddNewDepartment = () => {
  return (
    <Formik
      initialValues={{ DepartmentName: '', description: '', DepartmentStatus: true }}
      validationSchema={Yup.object({
        DepartmentName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        description: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <div className='bg-gray-100 border m-3 p-5 flex'>
          <div className=''>
            <label className='' htmlFor="DepartmentName">Department Name</label>
            <p><Field className="px-2 border border-black rounded-sm shadow-md" name="DepartmentName" type="text" /></p>
            <p className='text-red-600 text-sm font-semibold'><ErrorMessage name="DepartmentName" /></p>
          </div>
          <div className='mx-5'>
            <label className='' htmlFor="description">Description</label>
            <p><Field className="px-2 border border-black rounded-sm shadow-md" name="description" type="text" /></p>
            <p className='text-red-600 text-sm font-semibold'><ErrorMessage name="description" /></p>
          </div>
          <div className=''>
            <label htmlFor="DepartmentStatus">Is Active ?</label>
            <p className='flex justify-center mt-1'><Field name="DepartmentStatus" type="checkbox" /></p>
            <ErrorMessage name="DepartmentStatus" />
          </div>
          <div className='my-5 mx-5'>
            <button className='bg-green-500 px-2 py-1 rounded-sm shadow-md hover:shadow-2xl hover:bg-green-400' type="submit">Add Department</button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
export default AddNewDepartment
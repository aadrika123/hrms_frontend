import React, { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import usePostHookAxios from '../../../Components/Common/CustomHooks/usePostHookAxios';
import { useState, useEffect } from 'react';
import { contextVar } from '../../../Components/Context/Context'
// import cityState from '../../../LocalData/stateCity'


const AddCompanyBranch = (props) => {
    const { notify } = useContext(contextVar);

    const baseURL = process.env.REACT_APP_BASE_URL;

    const goBack = () => {
        props.handleBackBtn()
    }

    //Add new record
    const submitFormData = (data) => {
        axios({
            method: "post",
            url: `${baseURL}/companyBranchList`,
            data: {
                "address": data.Address,
                "location": data.Location,
                "gstin": data.gstin,
                "contact": data.contact,
                "email": data.email,
                "officeType": data.officeType,
                "status": data.status,
            },
        })
            .then(function (response) {
                console.log("Data Added..", response)
                notify('Branch Added Successfully', 'success')
                goBack()
            })
            .catch(function (response) {
                console.log("Failed to update Data", response);
            });
    }

// console.log("City and State Data : ", cityState)

    return (
        <Formik
            initialValues={{ Address: '', Location: '', gstin: '', contact: '', email: '', officeType: '', Landmark:'', status: true }}
            validationSchema={Yup.object({
                Address: Yup.string()
                    .max(50, 'Must be 50 characters or less')
                    .required('Required'),
                Location: Yup.string()
                    .max(50, 'Must be 50 characters or less')
                    .required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    // submitFormData(values)
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form>
                <div className=''>
                    <div className=' bg-red-100 py-8 border border-red-200 rounded-sm shadow-2xl'>

                        <div className='grid grid-cols-12 mx-10 justify-items-center'>
                            <div className='md:col-span-4 col-span-12'>
                                <div className='relative mt-5 mb-3'>
                                    <label className='text-lg md:text-base font-semibold md:font-normal' htmlFor="companyName">Company Name</label>
                                    <p><Field className="my-1 px-2 border w-72 md:w-60 h-10 md:h-7 outline-blue-600 border-black rounded-sm shadow-md" name="companyName" type="text" /></p>
                                    <p className='text-red-600 text-sm font-semibold absolute'><ErrorMessage name="companyName" /></p>
                                </div>
                                <div className='relative mt-5 mb-3'>
                                    <label className='text-lg md:text-base font-semibold md:font-normal' htmlFor="Address">Address</label>
                                    <p><Field className="my-1 px-2 border w-72 md:w-60 h-10 md:h-7 outline-blue-600 border-black rounded-sm shadow-md" name="Address" type="text" /></p>
                                    <p className='text-red-600 text-sm font-semibold absolute'><ErrorMessage name="Address" /></p>
                                </div>
                                <div className='relative mt-5 mb-3'>
                                    <label className='text-lg md:text-base font-semibold md:font-normal' htmlFor="Location">Location</label>
                                    <p><Field className="px-2 border w-72 md:w-60 h-10 md:h-7 outline-blue-600 border-black rounded-sm shadow-md" name="Location" type="text" /></p>
                                    <p className='text-red-600 text-sm font-semibold absolute'><ErrorMessage name="Location" /></p>
                                </div>
                                <div className='relative mt-5 mb-3'>
                                    <label className='text-lg md:text-base font-semibold md:font-normal' htmlFor="contact">Contact</label>
                                    <p><Field className="px-2 border w-72 md:w-60 h-10 md:h-7 outline-blue-600 border-black rounded-sm shadow-md" name="contact" type="text" /></p>
                                    <p className='text-red-600 text-sm font-semibold absolute'><ErrorMessage name="contact" /></p>
                                </div>
                            </div>
                            <div className='md:col-span-4 col-span-12'>
                                <div className='relative mt-5 mb-3'>
                                    <label className='text-lg md:text-base font-semibold md:font-normal' htmlFor="gstin">State</label>
                                    <p>
                                        <Field className="px-2 border w-72 md:w-60 h-10 md:h-7 outline-blue-600 border-black rounded-sm shadow-md" as="select" name="state">
                                            <option value="red">Red</option>
                                            <option value="green">Green</option>
                                            <option value="blue">Blue</option>
                                        </Field>
                                    </p>
                                    <p className='text-red-600 text-sm font-semibold absolute'><ErrorMessage name="gstin" /></p>
                                </div>
                                <div className='relative mt-5 mb-3'>
                                    <label className='text-lg md:text-base font-semibold md:font-normal' htmlFor="District ">District </label>
                                    <p>
                                        <Field className="px-2 border w-72 md:w-60 h-10 md:h-7 outline-blue-600 border-black rounded-sm shadow-md" as="select" name="District">
                                            <option value="red">Red</option>
                                            <option value="green">Green</option>
                                            <option value="blue">Blue</option>
                                        </Field>
                                    </p>
                                    <p className='text-red-600 text-sm font-semibold absolute'><ErrorMessage name="District" /></p>
                                </div>
                                <div className='relative mt-5 mb-3'>
                                    <label className='text-lg md:text-base font-semibold md:font-normal' htmlFor="City ">City </label>
                                    <p>
                                        <Field className="px-2 border w-72 md:w-60 h-10 md:h-7 outline-blue-600 border-black rounded-sm shadow-md" as="select" name="City">
                                            <option value="red">Red</option>
                                            <option value="green">Green</option>
                                            <option value="blue">Blue</option>
                                        </Field>
                                    </p>
                                    <p className='text-red-600 text-sm font-semibold absolute'><ErrorMessage name="City" /></p>
                                </div>
                                <div className='relative mt-5 mb-3'>
                                    <label className='text-lg md:text-base font-semibold md:font-normal' htmlFor="Landmark">Landmark</label>
                                    <p><Field className="px-2 border w-72 md:w-60 h-10 md:h-7 outline-blue-600 border-black rounded-sm shadow-md" name="Landmark" type="text" /></p>
                                    <p className='text-red-600 text-sm font-semibold absolute'><ErrorMessage name="Landmark" /></p>
                                </div>
                            </div>

                            <div className='md:col-span-4 col-span-12'>
                                <div className='relative mt-5 mb-3'>
                                    <label className='text-lg md:text-base font-semibold md:font-normal' htmlFor="gstin">gstin</label>
                                    <p><Field className="px-2 border w-72 md:w-60 h-10 md:h-7 outline-blue-600 border-black rounded-sm shadow-md" name="gstin" type="text" /></p>
                                    <p className='text-red-600 text-sm font-semibold absolute'><ErrorMessage name="gstin" /></p>
                                </div>
                                <div className='relative mt-5 mb-3'>
                                    <label className='text-lg md:text-base font-semibold md:font-normal' htmlFor="email">Email</label>
                                    <p><Field className="px-2 border w-72 md:w-60 h-10 md:h-7 outline-blue-600 border-black rounded-sm shadow-md" name="email" type="text" /></p>
                                    <p className='text-red-600 text-sm font-semibold absolute'><ErrorMessage name="email" /></p>
                                </div>
                                <div className='relative mt-5 mb-3'>
                                    <label className='text-lg md:text-base font-semibold md:font-normal' htmlFor="officeType">officeType</label>
                                    <p><Field className="px-2 border w-72 md:w-60 h-10 md:h-7 outline-blue-600 border-black rounded-sm shadow-md" name="officeType" type="text" /></p>
                                    <p className='text-red-600 text-sm font-semibold absolute'><ErrorMessage name="officeType" /></p>
                                </div>
                                <div className='col-span-12 flex my-2'>
                                    <label htmlFor="status" className='text-lg md:text-base font-semibold md:font-normal'>Is Active ?</label>
                                    <p className='justify-center ml-2'><Field name="status" type="checkbox" /></p>
                                    <ErrorMessage name="status" />
                                </div>
                            </div>
                        </div>


                        <div className='grid col-span-12 justify-items-center'>
                            <div>
                                <button className='bg-green-500 px-2 py-1 rounded-sm shadow-md hover:shadow-2xl hover:bg-green-400' type="submit">Add Branch</button>
                                <button onClick={goBack} className='bg-red-500 px-4 py-1 mx-2 rounded-sm hover:shadow-2xl hover:bg-red-600 shadow-lg'>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </Formik>
    );
};

export default AddCompanyBranch
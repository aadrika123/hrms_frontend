import { Button, Checkbox } from '@material-tailwind/react'
import React from 'react'

function ProjectVisibilityIndex() {

    const fakeData = [
        {
            "id": 1,
            "project": "AE OFFICE PERSONNEL"
        },
        {
            "id": 2,
            "project": "BUSINESS EXECUTIVE"
        },
        {
            "id": 3,
            "project": "JAMSHEDPUR SOLID WASTE"
        }
    ]


    return (
        <>
            <div className='relative flex py-3 pl-5 bg-gradient-to-r from-indigo-200 via-purple-100 to-green-200 shadow-sm border-b-2 border-red-300'>
                <div className='font-semibold text-xl'>Project Visiblity</div>
                {/* {!list && <div className='absolute inset-y-2 right-0 mr-2 md:mr-10'><button onClick={handleBackBtn} className='bg-indigo-600 hover:bg-indigo-400 hover:font-semibold hover:text-black px-4 py-1 text-base md:text-lg text-white rounded-sm shadow-2xl'>Back</button></div>} */}
            </div>
            <div className='md:flex py-2 justify-center bg-sky-100 md:text-base text-sm shadow-md'>
                <div className='grid justify-center'>
                    <label htmlFor="projectName" className='text-base font-medium'><span className='ml-5'> Project Name</span></label>
                    <select name="projectName" className='mx-5 px-5 py-1 my-1 w-64 border border-gray-400 rounded-sm'>
                        <option value=""> -- Select Project -- </option>
                        <option value="jodco">JUDCO</option>
                        <option value="rmc">Ranchi Municipal</option>
                    </select>
                </div>
                <div className='grid justify-center '>
                    <label htmlFor="projectName" className='text-base font-medium'><span className='ml-5'> Employee Name</span></label>
                    <select name="employeeName" className='mx-5 px-5 py-1 my-1 w-64 border border-gray-400 rounded-sm'>
                        <option value=""> -- Select Employee -- </option>
                        <option value="rahul">Rahul</option>
                        <option value="ansu">Ansuman</option>
                    </select>
                </div>
            </div>
            <div className='grid grid-cols-12 my-5'>
                <div className='md:col-span-5 col-span-12'>
                    <div >
                        <div className="md:w-4/5 w-full md:mx-5 hover:mt-2 hover:bg-blue-50 mx-2 bg-white border shadow-xl rounded-md overflow-hidden  transform   duration-500 easy-in-out">
                            {/* <div className=" h-32 overflow-hidden" >
                            <img className="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                            </div> */}
                            <div className="flex justify-center px-5">
                                <img className="h-32 w-32 bg-white p-2 rounded-full   " src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                            </div>
                            <div className=" ">
                                <div className="text-center px-14">
                                    <h2 className="text-gray-800 text-2xl font-bold">Mohit Kumar</h2>
                                    <p className=" text-gray-500 text-base font-medium mb-3">SOFTWARE DEVELOPER</p>
                                </div>
                                <div className='grid grid-cols-12 mx-5 font-medium'>
                                    <div className='col-span-6 '>
                                        <p>Original Project</p>
                                        <p>Department</p>
                                        <p>Designation </p>
                                        <p>Project Visibility</p>
                                    </div>
                                    <div className='col-span-6 text-gray-600'>
                                        <p>JUDCO</p>
                                        <p> Project Department</p>
                                        <p> Software Developer</p>
                                        <p> SOFTWARE DEVELOPER</p>
                                    </div>
                                </div>
                                <hr className="mt-6" />
                                <div className="flex  bg-gray-50 ">
                                    <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                                        <p><span className="font-semibold">2.5 k </span> Followers</p>
                                    </div>
                                    <div className="border"></div>
                                    <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                                        <p> <span className="font-semibold">2.0 k </span> Following</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:col-span-6 col-span-12 w-full md:my-0 my-8'>
                    <div className=" bg-sky-50 border shadow-lg rounded-md overflow-hidden  transform  md:hover:mt-1 hover:bg-red-50  duration-500 easy-in-out">
                        <div className='bg-green-300 w-full py-2 text-center font-semibold'>Project Permission</div>
                        {
                            fakeData.map((e, i) => (
                                <td key={i} />,
                                <div className='border border-gray-400 m-2 mx-5 px-2 py-1'> <input type="checkbox" name="check" /> {e.project}</div>
                                // <div><Checkbox className='border m-2 mx-5 px-2 py-1' id="ripple-on" ripple={true} />{e.project}</div>
                            ))
                        }
                        <div className='flex justify-center my-4'>
                            <Button variant="gradient" className='bg-blue-500 px-4 mx-2 py-1 text-base font-medium rounded-sm capitalize'>Save</Button>
                            <Button variant="gradient" className='bg-red-500 px-4 mx-2 py-1 text-base font-medium rounded-sm capitalize'>Cancel</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectVisibilityIndex
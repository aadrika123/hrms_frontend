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
            <div>
                <select name="projectName">
                    <option value=""> -- Select Project -- </option>
                    <option value="jodco">JUDCO</option>
                    <option value="rmc">Ranchi Municipal</option>
                </select>
            </div>
            <div>
                <select name="projectName">
                    <option value=""> -- Select Employee -- </option>
                    <option value="rahul">Rahul</option>
                    <option value="ansu">Ansuman</option>
                </select>
            </div>
            <div className='grid grid-cols-12'>
                <div className='md:col-span-6 col-span-12'>

                    <div >
                        <div className="md:w-4/5 w-full md:mx-5 mx-2 bg-white border shadow-lg rounded-md overflow-hidden  transform   duration-500 easy-in-out">
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
                <div className='md:col-span-6 col-span-12 md:w-4/5 w-full md:mx-5'>
                    <div className=" bg-white border shadow-lg rounded-md overflow-hidden  transform   duration-500 easy-in-out">
                        <div className='bg-green-300 w-full py-2 text-center font-semibold'>Project Permission</div>
                        {
                            fakeData.map((e, i) => (
                                <td key={i} />,
                                <div div className='border m-2 px-2 py-1'>{e.project}</div>
                            ))

                        }

                    </div>
                </div>

            </div>
        </>
    )
}

export default ProjectVisibilityIndex
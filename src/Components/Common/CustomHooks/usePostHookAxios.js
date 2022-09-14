import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'

const usePostHookAxios=(url, postData)=> {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const [message, setMessage] = useState(null);

    useEffect(() => {
        axios({
            method: "post",
            url: `${baseURL}/DepartmentList`,
            data : postData,
            // data: {
            //     "name": data.DepartmentName,
            //     "descriptoin": data.description,
            //     "status": data.DepartmentStatus,
            // },
        })
            .then(function (response) {
                console.log("Data Update..", response)
                setMessage(response)
            })
            .catch(function (response) {
                console.log("Failed to update Data", response);
                setMessage(response)
            });
    }, [url])



    return [message];
}

export default usePostHookAxios

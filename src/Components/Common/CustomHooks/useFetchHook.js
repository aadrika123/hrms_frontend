//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 14 Sep 2022
//    Revision - 1
//    Project - HRMS
//    Component  - usefetchHook.js
//    DESCRIPTION - This is common component for feting the data
//////////////////////////////////////////////////////////////////////////////////////
import { useState, useEffect } from "react";

const useFetchHook = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetchHook;


/*********************************************
------ How to use --------
Step 1. import useFetchHook from '../../../Components/Common/CustomHooks/useFetchHook'

Step 2.   const [data] = useFetchHook("https://jsonplaceholder.typicode.com/todos");
         console.log("Data : ", data)

/********************************************/
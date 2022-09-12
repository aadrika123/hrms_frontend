import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function Protected(props) {

    const { Component } = props;
    const navigate = useNavigate();

    useEffect(() => {
        let token = JSON.parse(window.localStorage.getItem('token'))
        if (token) {
            return navigate('/Dashboard')
        }
    }); 

  return (
    <div>
        <Component />
    </div>
  )
}

export default Protected
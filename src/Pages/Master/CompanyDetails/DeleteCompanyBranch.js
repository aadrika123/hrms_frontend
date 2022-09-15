//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 15 Sep 2022
//    Revision - 1
//    Project - HRMS
//    Component  - DeleteCompanyBranch.js
//    DESCRIPTION - 
//////////////////////////////////////////////////////////////////////////////////////
import axios from 'axios';
import React,{useState, useEffect, useContext} from 'react'
import DeleteModel from '../../../Components/Common/Models/DeleteModel'
import { contextVar } from '../../../Components/Context/Context'


function DeleteCompanyBranch(props) {
    const { notify } = useContext(contextVar);
    const baseURL = process.env.REACT_APP_BASE_URL;
    const btnId = props.btnId;
    const [modalIsOpen, setmodalIsOpen] = useState(false)  // set model open/ close
    // const [refetchList, setRefetchList] = useState(0) 

    useEffect(() => {
        setmodalIsOpen(props.openModel)
    }, [props.openModel])
    
    
    const handleCloseModal = () => {  // Cancel Delete.
        console.log("Canceled")
        // setmodalIsOpen(false)
        props.closeModel()
        notify('Delete Cancel', 'warn')
    }

    const handleDeleteTrue = (btnId) => {  //deletedBtnID is conformed deleted id.
        axios.delete(`${baseURL}/DepartmentList/${btnId}`)
            .then(function (res) {
                console.log("Deleted", res)
                notify('Deleted Successfully', 'success')
                props.refetchList() //Refetch List data after deletion step 1
            })
            .catch((error) => {
                console.log("Error : ", error)
            })
        setmodalIsOpen(false)
    }

    return (
        <>
            <DeleteModel
                IsModalOpened={modalIsOpen}
                onCloseModal={handleCloseModal}
                onDeleteTrue={handleDeleteTrue}
                deleteId={btnId}
            />
        </>
    )
}

export default DeleteCompanyBranch

/*
Exported to -
1. CompanyDetailsIndex

*/

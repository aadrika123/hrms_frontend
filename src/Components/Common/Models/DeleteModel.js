//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 13 Sep 2022
//    Revision - 1
//    Project - HRMS
//    Component  - DeleteModel.js
//    DESCRIPTION - This is common component
//////////////////////////////////////////////////////////////////////////////////////
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import closeDelete from '../../../Assets/illustration/closeDelete.png';
import openDelete from '../../../Assets/illustration/openDelete.png';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        width: '20rem',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const dynData = {
    title: 'Delete titile',
    body: 'Do you want to delete ?'
};

function DeleteDepartment(props) {

    const [showDeleteImg, setShowDeleteImg] = useState(closeDelete)
    const [openModel, setOpenModel] = useState(false)

    function onModalClose() {  // Called when cancel button is clicked
        props.onCloseModal();
    }

    function onModalDeletYes() {   //called when delete button pressed
        props.onDeleteTrue(props.deleteId);
    }

    const handleMouseHover = () => { //Image shown when move over delete button
        setShowDeleteImg(openDelete)
    }
    const handleMouseLeave = () => { //Image shown when move leave delete button
        setShowDeleteImg(closeDelete)
    }

    useEffect(() => {       // open model and set image to default on every delete btn cliked in "list".
        closeModelFunction(props.IsModalOpened)
        setShowDeleteImg(closeDelete)
    }, [props.IsModalOpened])
    

    const closeModelFunction=(e)=>{
        setOpenModel(e)
    }

    return (
        <div>
            <Modal
                isOpen={openModel}
                // onAfterOpen={e => afterOpenModal(e)}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className='font-semibold pb-5'>{dynData.body}</div>
                <div className='flex justify-center'>
                    <img src={showDeleteImg} alt="" className='h-20' />
                </div>
                <div className='flex justify-center mt-4'>
                    <button className='bg-red-500 hover:bg-red-400 mr-1 px-3 py-1 rounded-sm shadow-md' onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseHover} onClick={e => onModalDeletYes(e)}>Delete</button>
                    <button className='bg-green-500 hover:bg-green-400 ml-1 px-3 py-1 rounded-sm shadow-md' onClick={onModalClose}>Cancel</button>
                </div>
            </Modal>
        </div>
    );
}

export default DeleteDepartment;


/*
Exported to -
This is common componets used in many delete buttons
1. DepartmentListIndex.js
2.
3.
*/
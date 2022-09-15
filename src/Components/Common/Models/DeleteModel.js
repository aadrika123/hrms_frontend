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
import { TbAlertOctagon } from 'react-icons/tb';
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
        <div > {/*onBlur={onModalClose}*/}
            <Modal
                isOpen={openModel}
                // onAfterOpen={e => afterOpenModal(e)}
                style={customStyles}
                ariaHideApp={false}
            >
               <p className='flex'> <TbAlertOctagon className='mt-0.5' size={20} color="black"/><div className='font-semibold pb-5 ml-2'>{dynData.body}</div></p>
                <div className='flex justify-center'>
                    <img src={showDeleteImg} alt="" className='h-16' />
                </div>
                <div className='flex justify-center mt-4'>
                    <button className='bg-red-600 hover:bg-red-800 mr-1 px-5 py-2 rounded-sm shadow-md text-white text-sm font-medium' onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseHover} onClick={e => onModalDeletYes(e)}>Delete</button>
                    <button className='bg-green-600 hover:bg-green-800 mr-1 px-5 py-2 rounded-sm shadow-md text-white text-sm font-medium' onClick={onModalClose}>Cancel</button>
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
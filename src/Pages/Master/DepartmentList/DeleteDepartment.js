import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import closeDelete from '../../../Assets/illustration/closeDelete.png';
import openDelete from '../../../Assets/illustration/openDelete.png';



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        width: '20%',
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

    function onModalClose(event) {
        props.onCloseModal(event);
    }

    function onModalDeletYes() {
        props.onCloseModal(props.deleteId);
    }

    const handleMouseHover = () => {
        setShowDeleteImg(openDelete)
    }
    const handleMouseLeave = () => {
        setShowDeleteImg(closeDelete)
    }

    useEffect(() => {
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
                    <button className='bg-green-500 hover:bg-green-400 ml-1 px-3 py-1 rounded-sm shadow-md' onClick={e => onModalClose(e)}>Cancel</button>
                </div>
            </Modal>
        </div>
    );
}

export default DeleteDepartment;
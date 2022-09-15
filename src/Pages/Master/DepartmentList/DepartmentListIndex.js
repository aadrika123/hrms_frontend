import React, { useContext, useState } from 'react'
import AddNewDepartment from './AddNewDepartment'
import DepartmentList from './DepartmentList'
import DeleteModel from '../../../Components/Common/Models/DeleteModel'
import { contextVar } from '../../../Components/Context/Context'
import EditDepartment from './EditDepartment'
import axios from 'axios'

function DepartmentListIndex() {
  const { notify } = useContext(contextVar);

  const baseURL = process.env.REACT_APP_BASE_URL;
  const [title, setTitle] = useState("List of ")
  const [list, setList] = useState(true)
  const [addNew, setAddNew] = useState(false)
  const [edit, setEdit] = useState(false)
  const [modalIsOpen, setmodalIsOpen] = useState(false)  // set model open/ close
  const [btnId, setbtnId] = useState()
  const [refetchList, setRefetchList] = useState(0)


  const handleBackBtn = () => { // Show list of data
    setTitle("List of ")
    setList(true)
    setAddNew(false)
    setEdit(false)
  }

  const deleteBtn = (id) => {  // When delete button cliked
    setbtnId(id)
    setmodalIsOpen(true)
  }

  const editBtn = (id) => {
    setTitle("Edit ")
    setEdit(true)
    setAddNew(false)
    setList(false)
    setbtnId(id)
  }

  const addBtn = () => {
    setTitle("Add New")
    setAddNew(true)
    setEdit(false)
    setList(false)
  }

  const viewBtn = () => {
    console.log("View Btb ")
  }

  const handleCloseModal = () => {  // Cancel Delete.
    console.log("Canceled")
    setmodalIsOpen(false)
    notify('Delete Cancel', 'warn')

  }
  const handleDeleteTrue = (deletedBtnID) => {  //deletedBtnID is conformed deleted id.

    axios.delete(`${baseURL}/DepartmentList/${deletedBtnID}`)
      .then(function (res) {
        console.log("Deleted", res)
        notify('Deleted Successfully', 'success')
        setRefetchList(refetchList + 1)
      })
      .catch((error) => {
        console.log("Error : ", error)
      })
    setmodalIsOpen(false)
  }

  return (
    <>
      <div className='relative flex py-3 pl-5 bg-gradient-to-r from-indigo-200 via-purple-100 to-green-200'>
        <div className='font-semibold text-xl'>{title} Departments</div>
        {!list && <div className='absolute inset-y-2 right-0 mr-2 md:mr-10'><button onClick={handleBackBtn} className='bg-indigo-600 hover:bg-indigo-400 hover:font-semibold hover:text-black px-4 py-1 text-base md:text-lg text-white rounded-sm shadow-2xl'>Back</button></div>}
      </div>
      {list && <DepartmentList add={addBtn} edit={editBtn} view={viewBtn} delete={deleteBtn} refetchList={refetchList} />}
      {addNew && <AddNewDepartment handleBackBtn={handleBackBtn} />}
      {edit && <EditDepartment btnId={btnId} handleBackBtn={handleBackBtn} />}
      {/* Delete Model Box */}
      <DeleteModel
        IsModalOpened={modalIsOpen}
        onCloseModal={handleCloseModal}
        onDeleteTrue={handleDeleteTrue}
        deleteId={btnId}
      />
    </>
  )
}

export default DepartmentListIndex


/*
Exported to -
1. MasterIndex.js
*/
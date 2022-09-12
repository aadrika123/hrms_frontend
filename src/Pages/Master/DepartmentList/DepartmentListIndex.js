import React, { useState } from 'react'
import AddNewDepartment from './AddNewDepartment'
import DeleteDepartment from './DeleteDepartment'
import DepartmentList from './DepartmentList'

function DepartmentListIndex() {
  const [title, setTitle] = useState("List of ")
  const [list, setList] = useState(true)
  const [addNew, setAddNew] = useState(false)
  const [modalIsOpen, setmodalIsOpen] = useState()
  const [btnId, setbtnId] = useState()


  const handleBackBtn = () => {
    setTitle("List of ")
    setList(true)
    setAddNew(false)
  }

  const deleteBtn = (id) => {
    setbtnId(id)
    setmodalIsOpen(true)
  }

  const editBtn = (id) => {
    console.log("Edit Btn", id)
  }

  const addBtn = () => {
    setTitle("Add New")
    setAddNew(true)
    setList(false)
  }

  const viewBtn = () => {
    console.log("View Btb ")
  }

  const handleCloseModal = (deletedBtnID) => {  //deletedBtnID is conformed deleted id.
    console.log(deletedBtnID)
    setmodalIsOpen(false)
  }

  return (
    <>
      <div className='flex py-2 pl-5 bg-gradient-to-r from-indigo-200 via-purple-100 to-green-200'>
        <div className='w-1/2 font-semibold text-xl'>{title} Departments</div>
        {!list && <div className='w-1/2 flex justify-end mr-8'><button onClick={handleBackBtn} className='bg-indigo-600 hover:bg-indigo-400 hover:font-semibold hover:text-black px-4 text-base text-white rounded-sm shadow-2xl'>Back</button></div>}
      </div>
      {list && <DepartmentList add={addBtn} edit={editBtn} view={viewBtn} delete={deleteBtn} />}
      {addNew && <AddNewDepartment />}
      <DeleteDepartment
        IsModalOpened={modalIsOpen}
        onCloseModal={handleCloseModal}
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
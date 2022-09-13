import React, { useState } from 'react'
import AddNewDepartment from './AddNewDepartment'
import DepartmentList from './DepartmentList'
import DeleteModel from '../../../Components/Common/Models/DeleteModel'
import EditDepartment from './EditDepartment'

function DepartmentListIndex() {
  const [title, setTitle] = useState("List of ")
  const [list, setList] = useState(true)
  const [addNew, setAddNew] = useState(false)
  const [edit, setEdit] = useState(false)
  const [modalIsOpen, setmodalIsOpen] = useState(false)  // set model open/ close
  const [btnId, setbtnId] = useState()


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
  }
  const handleDeleteTrue = (deletedBtnID) => {  //deletedBtnID is conformed deleted id.
    console.log("Deleted Row ID : ",deletedBtnID)
    setmodalIsOpen(false)
  }

  const data = [
    { id: 1, name: 'Sales Department', descriptoin: 'This is sales', status: 'Active' },
    { id: 2, name: 'Project department', descriptoin: 'project', status: 'Active' },
    { id: 3, name: 'HR department', descriptoin: 'HR', status: 'Deactive' }
]

  return (
    <>
      <div className='flex py-2 pl-5 bg-gradient-to-r from-indigo-200 via-purple-100 to-green-200'>
        <div className='w-1/2 font-semibold text-xl'>{title} Departments</div>
        {!list && <div className='w-1/2 flex justify-end mr-8'><button onClick={handleBackBtn} className='bg-indigo-600 hover:bg-indigo-400 hover:font-semibold hover:text-black px-4 text-base text-white rounded-sm shadow-2xl'>Back</button></div>}
      </div>
      {list && <DepartmentList data={data} add={addBtn} edit={editBtn} view={viewBtn} delete={deleteBtn} />}
      {addNew && <AddNewDepartment />}
      {edit && <EditDepartment data={data} btnId={btnId} />}
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
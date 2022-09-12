import React from 'react'
import DataTableIndex from '../../../Components/Common/Datatable/DataTableIndex'

function DepartmentList(props) {

    const addBtnClik=()=>{
        props.add();
    }

    const columns = [

        {
            Header: '#',
            Cell: ({ row }) => (
                <div className='pr-2'>{row.index + 1}</div>
            )
        },
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Phone',
            accessor: 'phone'
        },
        {
            Header: 'Action',
            accessor: 'id',
            Cell: ({ cell }) => (
                <div>
                    <button onClick={() => props.view(cell.row.values.id)} className='bg-sky-400 mx-1 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black'>
                        View
                    </button>

                    <button onClick={() => props.edit(cell.row.values.id)} className='bg-sky-400 mx-1 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black'>
                        Edit
                    </button>

                    <button onClick={() => props.delete(cell.row.values.id)} className='bg-red-400 mx-1 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-red-800 hover:text-white text-black'>
                        Delete
                    </button>
                </div>
            )
        }
    ]

    const data = [
        { id: 1, name: 'dipu', email: 'dipu@test.com', phone: '9874477' },
        { id: 2, name: 'test', email: 'dipu@test.com', phone: '9874477' }
    ]

    return (
        <>
              <div className='border bg-white mb-20'>
                {/* <div className='text-center text-xl font-medium'>Manage Role of - {props.userName}</div> */}
                <div>
                    <div>
                        {/* {!isLoading && <DataTableIndex searchText="User" columns={columns} data={data?.data.data} />} */}
                        { <DataTableIndex searchText="User" columns={columns} data={data} addBtn={true} addBtnClik={addBtnClik} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DepartmentList
import React from 'react'
import DataTableIndex from '../../../Components/Common/Datatable/DataTableIndex'

function DepartmentList(props) {

    const addBtnClik = () => {
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
            Header: 'Department Name',
            accessor: 'name'
        },
        {
            Header: 'Description',
            accessor: 'descriptoin'
        },
        {
            Header: 'Status',
            accessor: 'status',
            Cell: (props) => {
                return (
                    <p>
                        {props.value == 'Active' && <p className='bg-green-600 text-white font-semibold text-center px-1 py-0.5 rounded-md'>{props.value}</p>}
                        {props.value == 'Deactive' && <p className='bg-red-600 text-white font-semibold text-center px-1 py-0.5 rounded-md'>{props.value}</p>}
                    </p>

                    //   <p style={{ background: props.value === "Complated" ? "green" : "red" }}>
                    //     {props.value}
                    //   </p>
                );
            }
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



    return (
        <>
            <div className='border bg-white mb-20'>
                {/* <div className='text-center text-xl font-medium'>Manage Role of - {props.userName}</div> */}
                <div>
                    <div>
                        {/* {!isLoading && <DataTableIndex searchText="User" columns={columns} data={data?.data.data} />} */}
                        {<DataTableIndex searchText="User" columns={columns} data={props?.data} addBtn={true} addBtnClik={addBtnClik} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DepartmentList
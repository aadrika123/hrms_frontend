//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 15 Sep 2022
//    Revision - 1
//    Project - HRMS
//    Component  - CompanyBranchList.js
//    DESCRIPTION - 
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import DataTableIndex from '../../../Components/Common/Datatable/DataTableIndex'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useEffect } from 'react';

function CompanyBranchList(props) {

    // This base url is declared in .env file.
    const baseURL = process.env.REACT_APP_BASE_URL;

    const addBtnClik = () => {
        props.add();
    }

    useEffect(() => {       // Refetch the list data after an Item is deleted.
        refetch();
    }, [props.forRefetchList])


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
                        {props.value === true && <p className='bg-green-600 text-white font-semibold text-center py-0.5 rounded-md'>Active</p>}
                        {props.value === false && <p className='bg-red-600 text-white font-semibold text-center py-0.5 rounded-md'>Deactive</p>}
                        {/* {props.value == 'Deactive' && <p className='bg-red-600 text-white font-semibold text-center py-0.5 rounded-md'>{props.value}</p>} */}
                    </p>
                );
            }
        },
        {
            Header: 'Action',
            accessor: 'id',
            Cell: ({ cell }) => (
                <div>
                    {/* <button onClick={() => props.view(cell.row.values.id)} className='bg-sky-400 mx-1 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black'>
                        View
                    </button> */}

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


    //Fetch Data using React-Query
    const { isLoading, data, refetch, isError, error, status, isFetching } = useQuery("fetchCompanyBranchList", () => {
        return axios.get(`${baseURL}/DepartmentList`);
    })

    if (isLoading) { <h1>Loading</h1> }

    // console.log("Status : ",status)
    // console.log("Error : ",error)
    // console.log("isLoading : ",isLoading)


    return (
        <>
            <div className='border bg-white mb-20'>
                <div>
                    <div>
                        {!isLoading && <DataTableIndex searchText="Branch" columns={columns} data={data?.data} addBtn={true} addBtnClik={addBtnClik} />}
                        {/* {<DataTableIndex searchText="User" columns={columns} data={props?.data} addBtn={true} addBtnClik={addBtnClik} />} */}
                    </div>
                </div>
            </div>
        </>
    )
}


export default CompanyBranchList
/*
Exported to -
1. CompanyDetailsIndex.js
*/

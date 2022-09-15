//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 15 Sep 2022
//    Revision - 1
//    Project - HRMS
//    Component  - CompanyDetailsIndex.js
//    DESCRIPTION - 
//////////////////////////////////////////////////////////////////////////////////////
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CompanyBranchList from './CompanyBranchList';
import CompanyDetails from './CompanyDetails';
import { useState } from 'react';
import DeleteCompanyBranch from './DeleteCompanyBranch';
import EditCompanyDetails from './EditCompanyDetails';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CompanyDetailsIndex() {
  const [value, setValue] = React.useState(0);
  const [btnId, setBtnId] = useState()
  const [openModel, setOpenModel] = useState(false)
  const [forRefetchList, setForRefetchList] = useState(0)
  const [companyEdit, setCompanyEdit] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const deleteBtn = (bId) => {
    console.log("Delte Btn id is ", bId)
    setBtnId(bId)
    setOpenModel(true)
  }
  const closeModel = () => { // this function called form DeleteCompanyBranch
    setOpenModel(false)
  }

  const refetchList = () => { //Refetch List data after deletion step 2
    setForRefetchList(forRefetchList + 1)
  }

  return (
    <>
      <DeleteCompanyBranch btnId={btnId} closeModel={closeModel} openModel={openModel} refetchList={refetchList} />
      <Box sx={{ width: '100%' }} className='border-t'>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Company Details" {...a11yProps(0)} />
            <Tab label="Company Branchs" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {companyEdit ? <EditCompanyDetails hadleCancelBtn={(e) => setCompanyEdit(e)} /> : <CompanyDetails hadleEditCompBtn={(e) => setCompanyEdit(e)} />}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/* <CompanyBranchList add={addBtn} edit={editBtn} view={viewBtn} delete={deleteBtn} refetchList={refetchList}/> */}
          <CompanyBranchList delete={deleteBtn} forRefetchList={forRefetchList} />
        </TabPanel>
      </Box>
    </>

  );
}

/*
Exported to -
1. MasterIndex
*/


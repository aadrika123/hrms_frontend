//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 12 Sep 2022
//    Revision - 1
//    Project - HRMS
//    Component  - MailboxSidebar.js
//    DESCRIPTION - 
//////////////////////////////////////////////////////////////////////////////////////
import { useState } from 'react'
import MailboxLink from './MailboxLink'

function MailboxSidebar(props) {
    const [tabIndex, setTabIndex] = useState(0)

    const tabSwitch = (index) => {
        setTabIndex(index)
        props.fun(index)
    }

    return (
        <>
        
            <aside className="overflow-x-auto" >
                <div className="py-4 pl-4 rounded flex flex-row sm:flex-col sm:pl-0">
                    {
                        props.tabs.map((data) => (
                            <div onClick={() => tabSwitch(data.tabIndex)}><MailboxLink activeStatus={tabIndex == data.tabIndex ? true : false} title={data.title} /></div>
                        ))
                    }
                </div>
            </aside>
        </>
    )
}

export default MailboxSidebar
/**
 * Exported to :
 * 1. MasterIndex.js
 * 
 */


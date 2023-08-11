import Table from '@/components/Table'
import Tabs from '@/components/Tabs'
import React , { useState } from 'react'

const StudentPage = () => {
    const [ activeTab, setActiveTab ] = useState('existingStudents')
    return (
        <div className='h-screen flex flex-col justify-start items-center p-4'>
            <Tabs.General 
                tabsData={[
                    {
                        id: 'existingStudents',
                        label: 'Existing Students'
                    },
                    {
                        id: 'createNewStudent',
                        label: 'Create New Students'
                    }
                ]}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            {activeTab == 'existingStudents'?  <div className="my-5 w-full">
                <Table.Student />
            </div> : <div className="my-5 w-full">
                
            </div> }
        </div>
    )
}

export default StudentPage
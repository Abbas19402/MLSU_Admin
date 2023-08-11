import Table from '@/components/Table'
import Tabs from '@/components/Tabs'
import React , { useState } from 'react'

const StudentPage = () => {
    const [ activeTab, setActiveTab ] = useState('existingStudents')
    return (
        <div className='h-screen flex flex-col justify-start items-center p-4'>
            <div className="my-5 w-full">
                <Table.Student />
            </div> 
        </div>
    )
}

export default StudentPage
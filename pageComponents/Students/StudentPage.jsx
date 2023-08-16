import Forms from '@/components/Forms'
import Table from '@/components/Table'
import Tabs from '@/components/Tabs'
import React , { useState } from 'react' 
import axios from 'axios'
import { useEffect } from 'react'

const StudentPage = () => {
    const [ activeTab, setActiveTab ] = useState('existingStudents')
    const [ students, setStudents ] = useState([])

    const getStudents = async() => {
        await axios.request({
            method: 'GET',
            url: 'https://server-mlsu-majorproject.vercel.app/api/students/getAllStudents'
        }).then(res  => {
            console.log(res.data.data)
            setStudents(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(()=> {
        getStudents()
    },[])
    return (
        <div className='h-screen flex flex-col justify-start items-center p-4'>
            <Tabs.General 
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                tabsData={[
                    {
                        label: 'Create Student',
                        id: 'createStudent'
                    },
                    {
                        label: 'Existing Student',
                        id: 'existingStudents'
                    }
                ]}
            />
            <div className="my-5 w-full">
                {activeTab == 'existingStudents' ? <Table.Student data={students}/> : <Forms.Student />}
            </div> 
        </div>
    )
}

export default StudentPage
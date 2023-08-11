import React, { useState } from 'react'
import FacultyQualificationForm from './FacultyQualificationForm'
import Table from '@/components/Table'

const QualificationFacultyMain = ({ qualificationDetails }) => {
  const [ qualificationCount, setQualificationCount ] = useState(0)
  const [ qualifications , setQualifications ] = useState([])
  return (<>
    <div className='text-black px-6 py-3 min-w-[80%]'>
      <div className="w-full pt-4">
        <span className="text-lg font-medium tracking-wide text-[#111827]">Qualification Details:</span>
      </div>
      <div className="bg-black w-fit px-2 text-sm text-white rounded-sm hover:cursor-pointer my-4" onClick={()=>{ 
        if(qualificationDetails.data) {
          qualificationDetails.data.push({})
        } else {
          qualificationDetails['data'] = [{}]
        }
        setQualificationCount(qualificationCount + 1)
      }}>
        <span className="text-sm font-medium tracking-wide">Add Qualification</span>
      </div>
      {[...Array(qualificationCount)].map((_, index) => (
        <FacultyQualificationForm key={index} qualification={qualificationDetails.data[index]}/>
      ))}

      <div className="w-24 h-7 bg-[#111827] text-white flex justify-center items-center rounded-md hover:cursor-pointer font-medium tracking-wide mb-5" onClick={()=> {
        setQualifications(qualificationDetails.data)
      }}>
        Save
      </div>
      
    </div>
    <div className="w-screen overflow-x-scroll lg:overflow-x-hidden">
      {qualifications.length !== 0 && <Table.Faculty.Documents documents={qualifications}/>}
    </div>
    </>
  )
}

export default QualificationFacultyMain
import React from 'react'
import Forms from '..'
import Table from '@/components/Table'

const CreateNewFaculty = () => {
  const personalDetails = {}
  const qualificationDetails = {}
  return (
    <div>
      <Forms.Faculty.personal personalDetails={personalDetails}/>
      <Forms.Faculty.qualification qualificationDetails={qualificationDetails} />
      {typeof qualificationDetails.data == [] && qualificationDetails.data.length < 0 && <Table.Faculty.Documents documents={qualificationDetails.data}/>}
      <div className="w-full my-2 flex justify-end items-center px-6">
        <div className="w-24 h-7 bg-[#111827] text-white flex justify-center items-center rounded-md hover:cursor-pointer font-medium tracking-wide" onClick={()=> console.log({personalDetails,qualificationDetails})}>
          Submit
        </div>
      </div>
    </div>
  )
}

export default CreateNewFaculty
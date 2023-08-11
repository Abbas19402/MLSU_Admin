import React from 'react'
import Forms from '..'
import Table from '@/components/Table'

const CreateNewFaculty = () => {
  const personalDetails = {}
  const qualificationDetails = {}
  const contactDetails = {}
  return (
    <div className='pb-10'>
      <Forms.Faculty.personal personalDetails={personalDetails}/>
      <Forms.Faculty.qualification qualificationDetails={qualificationDetails} />
      <Forms.Faculty.contact contactDetails={contactDetails}/>
      <div className="w-full my-2 flex justify-end items-center px-6">
        <div className="w-24 h-7 bg-[#111827] text-white flex justify-center items-center rounded-md hover:cursor-pointer font-medium tracking-wide" onClick={()=> console.log({personalDetails,qualificationDetails, contactDetails})}>
          Submit
        </div>
      </div>
    </div>
  )
}

export default CreateNewFaculty
import React from 'react'
import Select from 'react-select'

const FacultyQualificationForm = ({ qualification }) => {
  const qType = [
    {
      label: `Diploma`,
      value: 'diploma'
    },
    {
      label: `Bachelor${"'"}s`,
      value: 'bachelors'
    },
    {
      label: `Master${"'"}s`,
      value: 'masters'
    },
    {
      label: `Phd/Doctorate`,
      value: 'phd'
    }
  ]
  return (
    <div className='w-full h-fit rounded-md mb-10 py-5'>
      <div className="flex justify-start items-center gap-x-3">
        <label className='text-sm font-medium tracking-wide text-black w-52'>Select Qualification Type: </label>
        <Select className='w-80 ' options={qType} placeholder="Choose" onChange={(qualificationType)=> {
            qualification['qualificationType'] = qualificationType.value
          }}
        />
      </div>
      <div className="flex justify-start items-center gap-x-3 my-4">
        <label htmlFor="degreeName" className="text-sm font-medium tracking-wide text-black w-52">Degree Name: </label>
        <input 
          type="text" 
          name="degreeName" 
          id="degreeName" 
          className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide capitalize w-80`}
          onChange={(e)=> qualification['degreeName'] = e.target.value}
        />
      </div>
    </div>
  )
}

export default FacultyQualificationForm
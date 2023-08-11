import React from 'react'
import TextField from '@/components/TextField'

const FacultyContactForm = ({ contactDetails }) => {
  return (
    <div className="min-w-[80%] h-full text-black pb-5">
      <div className="w-full px-6 pt-4">
        <span className="text-lg font-medium tracking-wide text-[#111827]">Personal Details:</span>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-x-8 px-4 my-4">
        <TextField.Ordinary 
          fieldName={'address'}
          label={'Address'}
          placeholder={'Enter Address'}
          value={contactDetails}
          labelPosition={'right'}
          fieldLength={'long'}
          type={'text'}
          w={'full'}
        />
        <TextField.Ordinary 
          fieldName={'city'}
          label={'City'}
          placeholder={'Enter city'}
          value={contactDetails}
          labelPosition={'right'}
          fieldLength={'long'}
          type={'text'}
          w={'full'}
        />
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-x-8 px-4 my-4">
        <TextField.Ordinary 
          fieldName={'state'}
          label={'State'}
          placeholder={'Enter state'}
          value={contactDetails}
          labelPosition={'right'}
          fieldLength={'long'}
          type={'text'}
          w={'full'}
        />
        <TextField.Ordinary 
          fieldName={'country'}
          label={'Country'}
          placeholder={'Enter country'}
          value={contactDetails}
          labelPosition={'right'}
          fieldLength={'long'}
          type={'text'}
          w={'full'}
        />
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-x-8 px-4 my-4">
        <TextField.Ordinary 
          fieldName={'email'}
          label={'Email'}
          placeholder={'Enter email'}
          value={contactDetails}
          labelPosition={'right'}
          fieldLength={'long'}
          type={'text'}
          w={'full'}
        />
        <div className={`w-full h-fit flex flex-row items-center justify-startgap-x-3 p-2`}>
            <div className="text-black w-32">
                <label htmlFor="" className='text-sm font-medium tracking-wide whitespace-nowrap'>Secondary Email: </label>
            </div>
            <input 
                className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide capitalize w-80`}
                name={'secondaryEmail'}
                placeholder={'Secondary email (optional)'}
                onChange={(e)=> contactDetails[`secondaryEmail`] = e.target.value}
                type={'text'}
            />
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-x-8 px-4 my-4">
        <TextField.Ordinary 
          fieldName={'phone1'}
          label={'Phone 1'}
          placeholder={'Enter Primary Phone'}
          value={contactDetails}
          labelPosition={'right'}
          fieldLength={'long'}
          type={'text'}
          w={'full'}
        />
        <TextField.Ordinary 
          fieldName={'secondaryPhone'}
          label={'Phone 2'}
          placeholder={'Enter secondary phone (optional)'}
          value={contactDetails}
          labelPosition={'right'}
          fieldLength={'long'}
          type={'text'}
          w={'full'}
        />
      </div>
    </div>
  )
}

export default FacultyContactForm
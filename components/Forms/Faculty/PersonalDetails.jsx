import React from 'react'
import TextField from '@/components/TextField'

const PersonalFacultyDetailsSection = ({ personalDetails }) => {
  return (
    <div className="min-w-[80%] h-full text-black">
      <div className="w-full px-6 pt-4">
        <span className="text-lg font-medium tracking-wide text-[#111827]">Personal Details:</span>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-x-8 px-4 my-4">
        <TextField.Ordinary 
          fieldName={'firstName'}
          label={'First Name'}
          placeholder={'Enter First Name'}
          value={personalDetails}
          labelPosition={'right'}
          fieldLength={'long'}
          type={'text'}
          w={'full'}
        />
        <TextField.Ordinary 
          fieldName={'lastName'}
          label={'Last Name'}
          placeholder={'Enter Last Name'}
          value={personalDetails}
          labelPosition={'right'}
          fieldLength={'long'}
          type={'text'}
          w={'full'}
        />
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-x-8 px-4 my-4">
        <div className="flex justify-start items-center gap-x-3 p-2 w-full ">
          <label className='text-sm font-medium tracking-wide w-20'>Gender: </label>

          <span className='text-sm tracking-wide'>Male</span>
          <input type="radio" name="gender" id="male" value={'male'}  onClick={(event)=>personalDetails['gender'] = event.target.value}/>

          <span className='text-sm tracking-wide'>Female</span>
          <input type="radio" name="gender" id="female" value={'female'} onClick={(event)=>personalDetails['gender'] = event.target.value} />

        </div>
        <div className="flex justify-start items-center gap-x-3 p-2 w-full">
          <label className='text-sm font-medium tracking-wide w-20'>Date: </label>
          <input type="date" name="dob" id="dob" className='border-[2px] px-2 py-1 rounded-md w-80 ' onChange={(e)=> personalDetails['dob']=e.target.value} />
        </div>
      </div>
    </div>
  )
}

export default PersonalFacultyDetailsSection
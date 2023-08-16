import React, { useState } from 'react'
import Forms from '..'
import axios from 'axios'

const CreateNewFaculty = () => {
  const personalDetails = {}
  const qualificationDetails = {
    data: []
  }
  const contactDetails = {}
  const passwordDetails = {
    password: "",
    confirmPassword: ""
  }

  const createFacultyId = async() => {
    await axios.request({
      method: 'POST',
      url: 'https://server-mlsu-majorproject.vercel.app/api/faculty/createFacultyId',
      data: personalDetails
    }).then((res) => {
      console.log(res);
      createFaculty({
        faculty_id: res.data.data.faculty_id,
        password: passwordDetails.password,
        personalDetails,
        qualificationDetails,
        contactDetails
      })
    }).catch(err => {
      console.log(err);
    }) 
  }

  const createFaculty = async(facultyData) => {
    console.log(facultyData);
    await axios.request({
      method: "POST",
      url: "https://server-mlsu-majorproject.vercel.app/api/faculty/createFaculty",
      data: facultyData
    }).then(res => {
      console.log("Faculty Response: ",res);
    }).catch(err => {
      console.log("Error creating faculty: ",err);
    }) 
  }
  return (
    <div className='pb-10'>
      <Forms.Faculty.personal personalDetails={personalDetails}/>
      <Forms.Faculty.qualification qualificationDetails={qualificationDetails} />
      <Forms.Faculty.contact contactDetails={contactDetails}/>
      <div className="px-6 text-black">
        <div className={`w-full h-fit flex flex-col lg:flex-row items-start lg:items-center justify-start gap-x-3 gap-y-2 p-2`}>
          <div className="text-black w-32">
              <label htmlFor="" className='text-sm font-medium tracking-wide whitespace-nowrap'>Set Password: </label>
          </div>
          <input 
              className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide w-full lg:w-80`}
              name={'password'}
              placeholder={'Set Password'}
              onChange={(e)=> passwordDetails.password = e.target.value}
              type={'password'}
          />
        </div>
      </div>
      <div className="w-full my-2 flex justify-end items-center px-6">
        <div className="min-w-24 h-7 bg-[#111827] text-white flex justify-center items-center rounded-md hover:cursor-pointer font-medium tracking-wide px-3" onClick={()=> {
            createFacultyId()
          }}>
          Create New Faculty
        </div>
      </div>
    </div>
  )
}

export default CreateNewFaculty
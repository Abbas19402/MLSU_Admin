import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const CreateStudentForm = () => {
  const date = new Date()
  const createStudent = async(e) => {
    e.preventDefault();
    let values = {}
    const form = new FormData(e.currentTarget)
    for(var pair of form.entries()) {
      values[pair[0]] = pair[1]
    }
    const formattedData = {
      name: values.name,
      password: values.password,
      enrollment_id: `${values.name.split(" ")[0]}${values.name.split(" ")[1].substring(0,1)}${values.date_of_birth.substring(0,4)}`,
      generalDetails: { 
          department: values.department,
          course_enrolled: values.course_enrolled,
          batch: `1st Semester | ${date.getFullYear()}`,
          enrollment_id: `${values.name.split(" ")[0]}${values.name.split(" ")[1].substring(0,1)}${values.date_of_birth.substring(0,4)}`,
          enrollment_date: `${date.toDateString()}`
      } ,
      personalDetails: { 
          gender: values.gender,
          bloodGroup: values.bloodGroup,
          date_of_birth: values.date_of_birth,
          nationality: values.nationality,
          father_name: values.father_name,
          mother_name: values.mother_name,
      },
      addressDetails: {
          home: values.home,
          city: values.city,
          state: values.state,
          country: values.country,
          pin_code: values.pin_code,
      },
      contactDetails: { 
          mobile: values.mobile,
          emergency: values.emergency,
          email: values.email,
      },
      academicDetails: {
          current_semester: '1',
          course_type: values.course_type, // either semester or yearly of trimesters (if any)
          total_semesters_in_course: values.total_semesters_in_course,
          previous_semesters_details: [],
          attendance_till_date: '0',
          total_working_days: values.total_working_days
      }
    }
    await axios.request({
      method: 'POST',
      url: "https://server-mlsu-majorproject.vercel.app/api/students/addStudent",
      data: formattedData
    }).then(res => {
      toast.success(res.data.message)
    }).catch(err => {
      console.log(err)
      toast.error('Error creating Student!!!')
    })  
    console.log(formattedData)
    e.target.reset();
  }
  return (
    <form onSubmit={createStudent}>
      <div className="w-full h-fit ">
        <div className="w-full flex md:flex-row flex-wrap flex-col justify-start items-center gap-x-3 my-3">
          <div className="flex flex-col text-black gap-y-1 my-1">
            <label htmlFor="name" className="text-sm font-medium tracking-wide">Name</label>
            <input type="text" name="name" placeholder="Enter your name" id="name" className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide capitalize w-80 `}/>
          </div>
          <div className="flex flex-col text-black gap-y-1 my-1">
            <label htmlFor="password" className="text-sm font-medium tracking-wide">Set Password</label>
            <input type="password" name="password" placeholder="Choose password" id="password" className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide capitalize w-80`}/>
          </div>
        </div>

        <div className="w-full my-3 mt-5 text-black px-4 md:px-0">
          <span className="text-lg tracking-wide font-medium">General Details: </span>
        </div>
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-start items-center gap-x-3 my-3">
          <div className="flex flex-col text-black gap-y-1 my-1">
            <label htmlFor="department" className="text-sm font-medium tracking-wide">Department</label>
            <input type="text" name="department" placeholder="Enter your name" id="department" className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide capitalize w-80 `}/>
          </div>
          <div className="flex flex-col text-black gap-y-1 my-1">
            <label htmlFor="course_enrolled" className="text-sm font-medium tracking-wide">Course Enrolled</label>
            <input type="text" name="course_enrolled" placeholder="Enter course" id="course_enrolled" className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide capitalize w-80`}/>
          </div>
        </div>

        <div className="w-full my-3 mt-5 text-black px-4 md:px-0">
          <span className="text-lg tracking-wide font-medium">Personal Details: </span>
        </div>
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-start items-center gap-x-3 my-3">
          <div className="flex flex-col text-black gap-y-1 my-1">
            <label htmlFor="father_name" className="text-sm font-medium tracking-wide">Father Name</label>
            <input type="text" name="father_name" placeholder="Enter your father name" id="father_name" className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide capitalize w-80 `}/>
          </div>
          <div className="flex flex-col text-black gap-y-1 my-1">
            <label htmlFor="mother_name" className="text-sm font-medium tracking-wide">Mother Name</label>
            <input type="text" name="mother_name" placeholder="Enter your mother name" id="mother_name" className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide capitalize w-80`}/>
          </div>
          <div className="flex flex-col text-black gap-y-1 my-1">
            <label htmlFor="bloodGroup" className="text-sm font-medium tracking-wide">Blood Group</label>
            <input type="text" name="bloodGroup" placeholder="Enter your blood group" id="bloodGroup" className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide capitalize w-80 `}/>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-start items-center gap-x-3 my-3">
          <div className="flex flex-col text-black gap-y-1 my-1">
            <label htmlFor="nationality" className="text-sm font-medium tracking-wide">Nationality</label>
            <input type="text" name="nationality" placeholder="Enter your nationality" id="nationality" className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide capitalize w-80`}/>
          </div>
          <div className="flex flex-col text-black gap-y-1 my-1">
            <label htmlFor="date_of_birth" className="text-sm font-medium tracking-wide">Date of Birth</label>
            <input type="date" name="date_of_birth" placeholder="date of birth" id="date_of_birth"  className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide w-80`}/>
          </div>
          <div className="flex flex-col text-black gap-y-1 my-1">
            <label htmlFor="nationality" className="text-sm font-medium tracking-wide">Gender</label>
            <div className="flex flex-row justify-start items-center gap-x-4 border-2 w-80 p-1.5 rounded-md">
              <div className="flex flex-row gap-x-2">
                <label className="text-sm font-medium tracking-wide text-gray-700">Male</label>
                <input type="radio" name="gender" id="male" value="male"/>
              </div>
              <div className="flex flex-row gap-x-2">
                <label className="text-sm font-medium tracking-wide text-gray-700">Female</label>
                <input type="radio" name="gender" id="female" value="female"/>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full my-3 mt-5 text-black px-4 md:px-0">
          <span className="text-lg tracking-wide font-medium">Address Details: </span>
        </div>
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-start items-center gap-x-3 my-3">
          <div className="flex flex-col text-black gap-y-1 my-1">
            <label htmlFor="home" className="text-sm font-medium tracking-wide">Home</label>
            <input type="text" name="home" placeholder="Enter your area" id="home" className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide capitalize w-80 `}/>
          </div>
          <div className="flex flex-col text-black gap-y-1 my-1">
            <label htmlFor="city" className="text-sm font-medium tracking-wide">City</label>
            <input type="text" name="city" placeholder="Enter your city" id="city" className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide capitalize w-80`}/>
          </div>
          <div className="flex flex-col text-black gap-y-1 my-1">
            <label htmlFor="state" className="text-sm font-medium tracking-wide">State</label>
            <input type="text" name="state" placeholder="Enter your state" id="state" className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide capitalize w-80 `}/>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-start items-center gap-x-3 my-3">
          <div className="flex flex-col text-black gap-y-1 my-1">
            <label htmlFor="country" className="text-sm font-medium tracking-wide">Country</label>
            <input type="text" name="country" placeholder="Enter your country" id="country" className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide capitalize w-80 `}/>
          </div>
          <div className="flex flex-col text-black gap-y-1 my-1">
            <label htmlFor="pin_code" className="text-sm font-medium tracking-wide">Pin Code</label>
            <input type="text" name="pin_code" placeholder="Enter your country" id="pin_code" className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide capitalize w-80`}/>
          </div>
        </div>

        <div className="w-full my-3 mt-5 text-black px-4 md:px-0">
          <span className="text-lg tracking-wide font-medium">Contact Details: </span>
        </div>
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-start items-center gap-x-3 my-3">
          <div className="flex flex-col text-black gap-y-1 my-1">
            <label htmlFor="mobile" className="text-sm font-medium tracking-wide">Primary Phone</label>
            <input type="tel" name="mobile" placeholder="Primary phone" id="mobile" className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide capitalize w-80 `}/>
          </div>
          <div className="flex flex-col text-black gap-y-1 my-1">
            <label htmlFor="emergency" className="text-sm font-medium tracking-wide">Secondary Phone</label>
            <input type="tel" name="emergency" placeholder="Enter your secondary/alternate phone" id="emergency" className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide capitalize w-80`}/>
          </div>
          <div className="flex flex-col text-black gap-y-1 my-1">
            <label htmlFor="email" className="text-sm font-medium tracking-wide">Email</label>
            <input type="email" name="email" placeholder="Enter your email" id="email" className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide w-80`}/>
          </div>
        </div>

        <div className="w-full my-3 mt-5 text-black px-4 md:px-0">
          <span className="text-lg tracking-wide font-medium">Academic Details: </span>
        </div>
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-start items-center gap-x-3 my-3">
          <div className="flex flex-col text-black gap-y-1 my-1">
            <label htmlFor="course_type" className="text-sm font-medium tracking-wide">Course Type</label>
            <input type="text" name="course_type" placeholder="Semester/Annual" id="course_type" className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide  w-80 `}/>
          </div>
          <div className="flex flex-col text-black gap-y-1 my-1">
            <label htmlFor="total_semesters_in_course" className="text-sm font-medium tracking-wide">Total No. of Semesters/years</label>
            <input type="text" name="total_semesters_in_course" placeholder="total no. of semesters" id="total_semesters_in_course" className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide capitalize w-80`}/>
          </div>
          <div className="flex flex-col text-black gap-y-1 my-1">
            <label htmlFor="total_working_days" className="text-sm font-medium tracking-wide">Total Working days per semester</label>
            <input type="text" name="total_working_days" placeholder="working days/sem" id="total_working_days" className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide capitalize w-80`}/>
          </div>
        </div>

        <div className="mt-5 mb-8 flex justify-start items-center">
          <button type="submit" className='text-sm font-medium tracking-wide bg-black px-3 py-1 rounded-sm'>
            Create Student
          </button>
        </div>
      </div>
    </form>
  )
}

export default CreateStudentForm
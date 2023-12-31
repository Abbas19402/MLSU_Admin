import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { LOGIN } from '@/Redux/AuthSlice'

const AuthModal = ({ open, setOpen }) => {
    const dispatch = useDispatch()
    const cancelButtonRef = useRef(null)
    const [ facultyCredentials , setFacultyCredentials ] = useState({
        faculty_id: "",
        password: ""
    })

    const login = async() => {
        await axios.request({
            method: 'POST',
            url: 'https://server-mlsu-majorproject.vercel.app/api/auth/login/faculty',
            data: facultyCredentials
        }).then(res => {
            console.log(res.data.faculty.faculty)
            dispatch(LOGIN(res.data.faculty.faculty))
            setOpen(false)
        }).catch(err => {
            console.log(err)
        })
    }
  
    return (
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
    
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="w-full border-b-[1px] border-black h-16 flex items-center justify-start px-10 text-[#111827]">
                        <span className="text-2xl font-medium tracking-wide">Login</span>
                    </div>
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col justify-center items-center">
                        <div className="flex flex-col text-black gap-y-1 my-1">
                            <label htmlFor="faculty_id" className="text-sm font-medium tracking-wide">Faculty ID</label>
                            <input type="text" name="faculty_id" placeholder="Enter Faculty ID" id="faculty_id" onChange={(e) => {
                                setFacultyCredentials({
                                    faculty_id: e.target.value,
                                    password: ''
                                })
                            }} className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide w-80`}/>
                        </div>
                        <div className="flex flex-col text-black gap-y-1 my-1">
                            <label htmlFor="password" className="text-sm font-medium tracking-wide">Password</label>
                            <input type="password" name="password" placeholder="Enter Password" id="password"  onChange={(e) => {
                                setFacultyCredentials({
                                    faculty_id: facultyCredentials.faculty_id,
                                    password: e.target.value
                                })
                            }} className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide w-80`}/>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-[#111827] px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                        onClick={() => login()}
                      >
                        Login
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
    )
}

export default AuthModal
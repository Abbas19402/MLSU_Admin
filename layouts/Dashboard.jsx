import React , { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Modal from '@/components/Modal'
import { useSelector } from 'react-redux'
import { useLottie } from 'lottie-react'
import LoginAnimation from '@/public/loginAnimation.json'

const DashboardLayout = ({ children }) => {
  const loginStatus = useSelector(state => state.auth.loginStatus)

  const [ sidebarStatus, setSidebarStatus ] = useState(false)
  const [ activeSection, setActiveSection ] = useState('')
  const [ open, setOpen ] = useState(false)

  const options = {
    animationData: LoginAnimation,
    loop: true
  };

  const { View } = useLottie(options);

  useEffect(()=> {
    if(loginStatus == false) {
      setOpen(true)
    }
  },[])
  return (<>
      <div className='max-w-screen min-h-screen flex flex-row justify-start items-start '> 
        <Modal.auth
          open={open}
          setOpen={setOpen}
        />
        <Sidebar sidebarStatus={sidebarStatus} setSidebarStatus={setSidebarStatus} setActiveSection={setActiveSection}/>
        <div className="w-full h-full flex flex-col justify-start items-center overflow-x-hidden bg-[#111827]">
          <Header sidebarStatus={sidebarStatus} setSidebarStatus={setSidebarStatus} open={open} setOpen={setOpen}/>
          <div className="w-full h-screen overflow-x-hidden lg:rounded-tl-3xl bg-white no-scrollbar">
            {loginStatus && <div className="text-4xl text-black tracking-wide bg-gray-100 m-4 p-2 flex justify-start items-center rounded-lg capitalize">
              {activeSection}
            </div>}
            {loginStatus ? children : <div className='w-full h-screen bg-white flex justify-center items-center'>
            <div className="w-[40rem] h-[40rem]">
              {View}  
            </div>
            </div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
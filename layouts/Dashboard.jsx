import React , { useState } from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Modal from '@/components/Modal'

const DashboardLayout = ({ children }) => {
  const [ sidebarStatus, setSidebarStatus ] = useState(false)
  const [ activeSection, setActiveSection ] = useState('')
  const [ open, setOpen ] = useState(false)
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
            <div className="text-4xl text-black tracking-wide bg-gray-100 m-4 p-2 flex justify-start items-center rounded-lg capitalize">
              {activeSection}
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
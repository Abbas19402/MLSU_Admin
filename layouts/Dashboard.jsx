import React , { useState } from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { ToastContainer } from 'react-toastify'

const DashboardLayout = ({ children }) => {
  const [ sidebarStatus, setSidebarStatus ] = useState(false)
  const [ activeSection, setActiveSection ] = useState('Students')
  return (<>
      <div className='max-w-screen min-h-screen flex flex-row justify-start items-start '>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Sidebar sidebarStatus={sidebarStatus} setSidebarStatus={setSidebarStatus} setActiveSection={setActiveSection}/>
        <div className="w-full h-full flex flex-col justify-start items-center overflow-x-hidden bg-[#111827]">
          <Header sidebarStatus={sidebarStatus} setSidebarStatus={setSidebarStatus}/>
          <div className="w-full h-screen border-2 border-black overflow-x-hidden lg:rounded-tl-3xl bg-white no-scrollbar">
            <div className="text-4xl text-black tracking-wide bg-gray-100 m-4 p-2 flex justify-start items-center rounded-lg">
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
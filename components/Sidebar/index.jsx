import React, { useEffect, useState } from 'react'
import SidebarRoutes from '@/constants/DashboardSidebarRoutes'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

const Sidebar = ({ sidebarStatus, setSidebarStatus, setActiveSection }) => {
  const [ active, setActive ] = useState('students')
  const { push, pathname } = useRouter()
  useEffect(()=> {
    if(pathname == '/') {
      setActive('students')
    } else {
      setActive(pathname.split('/')[1])
    }
  },[])
  return (
    <div className={`fixed top-0 left-0 lg:w-[25vw] lg:sticky ${sidebarStatus ? 'w-[80%]' : 'w-0'} overflow-hidden transition-all duration-300 lg:flex flex-col min-h-screen bg-[#111827] rounded-r-2xl lg:rounded-r-none`}>
      <div className="w-full h-fit flex justify-between items-center p-5">
        <div onClick={()=> push('/')}>
          <span className="sr-only">Your Company</span>
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" />
        </div>
        <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarStatus(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="w-full h-full p-2">
        {SidebarRoutes.map((item,index) => {
          return <div onClick={()=> {
              setActive(item.route)
              setSidebarStatus(false)
              setActiveSection(item.label)
              push(item.route)
            }} key={index+1} className={`w-full h-10 rounded-md my-2 flex flex-row justify-start items-center gap-4 px-5 hover:cursor-pointer ${ active == item.route ? 'bg-gray-800' : 'bg-transparent' } hover:bg-gray-800 transition-all`}>
            {item.icon}
            <span className={`text-sm tracking-wider ${active == item.route ? 'text-white font-medium' : 'text-gray-300'}`}>{item.label}</span>
          </div>
        }) }
      </div>
    </div>
  )
}

export default Sidebar
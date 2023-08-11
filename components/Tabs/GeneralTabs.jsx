import React from 'react'

const GeneralTabs = ({ activeTab, setActiveTab, tabsData }) => {
  return (
    <div className='w-full flex justify-end items-center gap-2 border-b-2 pb-2 border-b-neutral-400'>
        {tabsData.map((item,index)=> (
            <div key={index} onClick={()=> setActiveTab(item.id)} className={`min-w-32 h-10 flex justify-center items-center px-2 rounded-lg  ${activeTab == item.id ? 'bg-neutral-300 shadow-md' : 'bg-slate-100'}  hover:cursor-pointer hover:bg-neutral-300`}>
                <span className="text-md text-black font-medium">{item.label}</span>
            </div>
        ))}
    </div>
  )
}

export default GeneralTabs
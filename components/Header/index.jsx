import { Bars3Icon } from '@heroicons/react/24/outline'
import Icons from '../Icons'

export default function Header({ sidebarStatus, setSidebarStatus }) {
  return (
    <header className="bg-white lg:bg-[#111827] w-full">
      <nav className="flex max-w-screen items-center gap-x-3 justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={()=>setSidebarStatus(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="w-full h-full flex justify-start items-center gap-x-2">
          <div className='h-7 w-7 lg:hidden'>
            <Icons.Search className="h-10 w-10"/>
          </div>
          <div className='h-7 w-7 lg:block hidden'>
            <Icons.SearchLight className="h-10 w-10"/>
          </div>
          <input 
            className='bg-transparent outline-0 text-black lg:text-white'
            placeholder='Search...'
          />
        </div>
        <div className="flex lg:flex-1 lg:justify-end whitespace-nowrap">
          <a href="#" className="text-sm font-semibold leading-6 lg:text-white text-black">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

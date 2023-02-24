import { CogIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='flex bg-gray-100 font-sans text-gray-900'>
      <aside className='h-screen w-auto border-r border-gray-200 bg-white flex flex-col items-center p-5 '>
        <div className='h-18 w-full my-4 flex items-center border-b border-gray-200 font-sans font-bold text-xl '>
          Dashboard
        </div>
        {/* <nav className='flex flex-1 flex-col gap-y-1 pt-10'>
          <a href='/listofuser' className='rounded-sm bg-gray gap-y-1 pt-10'>
            List of Users
          </a>
          <a href='/listofuser' className='rounded-sm bg-gray gap-y-1 pt-10'>
            Who Payed
          </a>
          <a href='/listofuser' className='rounded-sm bg-gray gap-y-1 pt-10'>
            User Detail
          </a>
          <a href='/listofuser' className='rounded-sm bg-gray gap-y-4 pt-10'>
            Delete User
          </a>
        </nav> */}
        <ul className=''>
           <li className='my-1 rounded-sm bg-gray-50 hover:text-bold hover:text-ellipsis hover:bg-black'>
            
            <Link to="/package-create">
              Package Create
            </Link>
          </li> <li className='my-1 rounded-sm bg-gray-50 hover:text-bold hover:text-yellow-300 hover:bg-black'>
            
            <Link to="/package-create">
              Package Create
            </Link>
          </li> <li className= 'my-1 rounded-sm bg-gray-50 hover:text-bold hover:text-yellow-300 hover:bg-black'>
            
            <Link to="/package-create">
              Package Create
            </Link>
          </li> <li className= 'my-1 rounded-sm bg-gray-50 hover:text-bold hover:text-yellow-300 hover:bg-black'>
            
            <Link to="/package-create">
              Package Create
            </Link>
          </li> <li className='my-1 rounded-sm bg-gray-50 hover:text-bold hover:text-yellow-300 hover:bg-black'>
            
            <Link to="/package-create">
              Package Create
            </Link>
          </li> <li className='my-1 rounded-sm bg-gray-50 hover:text-bold hover:text-yellow-300 hover:bg-black'>
            
            <Link to="/package-create">
              Package Create
            </Link>
          </li> <li className='my-1 rounded-sm bg-gray-50 hover:text-bold hover:text-yellow-300 hover:bg-black'>
            
            <Link to="/package-create">
              Package Create
            </Link>
          </li>
          <li className='my-1 rounded-sm bg-gray-50 hover:text-bold hover:text-yellow-300 hover:bg-black'>
            
            <Link to="/package-create">
              Package Create
            </Link>
          </li>

        </ul>
      </aside>
    </div>
  )
}

export default Dashboard
import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Header() {
  const auth  = useAuth()
  const navigate = useNavigate()
  return (
    <div className="p-4 flex justify-between  ">
      {/* Header Title */}
      <h1 className="text-1xl font-bold text-gray-800 mb-4">
        Hello there 👋
      </h1>

      <div className='flex gap-6 flex-row'>
      {/* Search Input */}
      <div className="flex items-center bg-white border border-blue-200 rounded-lg sm:p-1 shadow-md max-w-md">
        <IoMdSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full outline-none text-sm bg-transparent  text-gray-700"
        />

      </div>
      
    <button onClick={() => {
      auth.logout()
      navigate('/adminLogin')
      }} className='flex gap-3 items-center'>
    <span> Log Out </span>
    <BiLogOut size={40} />
    </button>
    </div>
    </div>
  )
}

export default Header

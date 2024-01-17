import React from 'react'
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom'

export default function DashBoard() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/')
  }
  
  return (
    <>
      <div>
        <h1 className='my-2'>Dashboard</h1>
        <Outlet />
        <button 
          onClick={handleClick}
          className='bg-blue-600 text-white rounded p-1 block'
        >
          Logout
        </button>

        <Link to='bienvenido' className='text-blue-600 underline'>
            Click para saludo
        </Link>
        <br />
        <Link to='despedida' className='text-blue-600 underline'>
            Click para despedida
        </Link>
      </div>
    </>
  )
}

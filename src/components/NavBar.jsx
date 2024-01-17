import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <div>
        <ul className='flex gap-4 text-blue-600'>
          <li>
            <NavLink to='/' >Inicio</NavLink>
          </li>
          <li>
            <NavLink to='/nosotros' >Nosotros</NavLink>
          </li>
          <li>
            <NavLink to='/contacto' >Contacto</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard' >Dashboard</NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

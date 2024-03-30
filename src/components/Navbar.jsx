import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex bg-blue-500 min-h-60 p-6 text-white flex-wrap justify-between'>
    <Link to='./'>
    <img src="./images/logo.png" alt="log" className='h-10 w-52' />
    </Link>
    <p>
      <Link to='/innovation'>Innovations</Link>
    </p>
    <p>Business Services</p>
    <p>Financial Services</p>
    <p>Bootcamp</p>   
    </div>
  )
}

export default Navbar

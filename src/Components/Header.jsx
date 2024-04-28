import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
    <nav>Complete your Daily Goals!</nav>
    <div className='header'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>

    </div>
    </>
    
  )
}

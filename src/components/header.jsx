import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/gemhunters-horizontal-logo-p-500.png' // Import your logo
import { Link as ScrollLink } from 'react-scroll'

const Header = () => {
  return (
    <header className='px-6 md:px-10 py-4'>
      <div className='max-w-7xl mx-auto flex justify-center sm:justify-between items-center'>
        {/* Logo (Centered on small screens) */}
        <Link to='/'>
          <img src={logo} alt='Gem Hunters Logo' className='w-44 ' />
        </Link>

        {/* Button (Hidden on Small Screens) */}

        <Link
          className='hidden text-center sm:block button-3-is-solid lg-rouded'
          to={'/'}
        >
          JOIN NOW
        </Link>
      </div>
    </header>
  )
}

export default Header

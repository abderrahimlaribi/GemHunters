import React from 'react'
import { Link } from 'react-router-dom' // Import Link from react-router-dom
import logo from '../assets/images/gemhunters-horizontal-logo-p-500.png' // Import your logo

const Footer = () => {
  return (
    <div className='footer-section w-full px-6 md:px-12 py-4'>
      <div className='footer-container flex flex-col gap-2'>
        <div className='logo flex justify-center sm:justify-start'>
          <Link to='/'>
            <img src={logo} alt='Gem Hunters Logo' className='w-44 ' />
          </Link>
        </div>
        <div className='divider'></div>
        <div className='ft-section flex flex-col gap-4'>
          <div className='footer-bottom flex flex-col sm:flex-row gap-4 md:justify-start sm:justify-center'>
            <Link to={'/terms'}>Terms of Service</Link>
            <div className='hor-divider hidden sm:block'></div>
            <Link to={'/privacy-policy'}>Privacy Policy</Link>
          </div>
          <div className='footer_disclaimer'>
            <p>
              IMPORTANT DISCLAIMER: All content provided herein our website,
              hyperlinked sites, associated applications, forums, blogs, social
              media accounts and other platforms (“Site”) is for your general
              information only, procured from third party sources. We make no
              warranties of any kind in relation to our content, including but
              not limited to accuracy and timeliness. No part of the content
              that we provide constitutes financial advice, legal advice or any
              other form of advice meant for your specific reliance for any
              purpose. Any use or reliance on our content is solely at your own
              risk and discretion. You should conduct your own research, review,
              analyse and verify our content before relying on them. Trading is
              a highly risky activity that can lead to major losses and is not
              recommended, please therefore consult your financial advisor
              before making any decision.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

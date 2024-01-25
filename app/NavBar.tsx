import Link from 'next/link'
import React from 'react'

import { AiFillBug } from 'react-icons/ai'

const NavBar = () => {
  const links = [
    {
      label: 'Dashboard',
      href: '/',
    },
    {
      label: 'Issues',
      href: '/issues',
    },
  ]

  return (
    <nav className='flex space-x-5 border-b mb-5 px-6 h-14 items-center'>
      <Link href='/'>
        <AiFillBug />
      </Link>
      <ul className='flex space-x-6'>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className='hover:text-zinc-500 transition-colors text-gray-100'
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar

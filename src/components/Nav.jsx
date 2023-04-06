import React from 'react'
import { Cloud } from '../Cloud'

const Nav = ({ current }) => {
  return (
    <nav className='container flex justify-end gap-2'>
      {current?.condition.text === 'Clear' && <Cloud />}

      <span>Menu</span>
      <span>Reload</span>
    </nav>
  )
}

export default Nav

import React from 'react'
import { Cloud } from '../Cloud'

const Nav = ({ data }) => {
  return (
    <nav className='container flex justify-end gap-2'>
      {data?.current.condition.text === 'Clear' && <Cloud />}

      <span>Menu</span>
      <span>Reload</span>
    </nav>
  )
}

export default Nav

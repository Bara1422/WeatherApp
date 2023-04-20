import React from 'react'

const Humidity = () => {
  return (
    <svg
      className='w-6 h-6'
      set='current-conditions'
      name='humidity'
      theme='dark'
      data-testid='Icon'
      viewBox='0 0 24 24'
    >
      <title>Humidity</title>
      <path
        fill-rule='evenodd'
        d='M11.743 17.912a4.182 4.182 0 0 1-2.928-1.182 3.972 3.972 0 0 1-.614-4.962.743.743 0 0 1 .646-.349c.234 0 .476.095.66.275l4.467 4.355c.385.376.39.998-.076 1.275a4.216 4.216 0 0 1-2.155.588M11.855 4c.316 0 .61.14.828.395.171.2.36.416.562.647 1.857 2.126 4.965 5.684 4.965 8.73 0 3.416-2.85 6.195-6.353 6.195-3.505 0-6.357-2.78-6.357-6.195 0-3.082 2.921-6.406 4.854-8.605.242-.275.47-.535.673-.772A1.08 1.08 0 0 1 11.855 4'
      />
    </svg>
  )
}

export default Humidity
import React from 'react'

export const ToggleButton = ({setOpen}) => {
  return (
    <button onClick={() => setOpen(prev => !prev)}>Button</button>
  )
}

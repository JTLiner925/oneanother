import React from 'react'

export default function Needed(props) {
  return (
    <div className='Needed'>
      <div className='Item'>
  <label htmlFor='item-needed'>
  <input type='checkbox' id='item-needed' className='visually-hidden'/>
  {props.item}
  </label>
      </div>
    </div>
  )
}

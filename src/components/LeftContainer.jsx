import React from 'react'
import '../css/leftContainer.css'
import keyboard from '../assets/keyboard_arrow_down.svg'

const LeftContainer = () => {
  return (
    <div className='lCon'>
    <div className='lCon-sort'>
      <p>Показано 1 - 15 из 874 <br /></p>
      <div className='p-sorted'>
        <p>Сортировать:</p>
        <div className='sortP-icon'>
        <p>Цена по позрастанию</p>
        <img src={keyboard} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default LeftContainer;
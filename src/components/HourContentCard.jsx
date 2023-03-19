import React from 'react'
import '../styles/css/HourlyContentCard.css'

const HourContent = ({ elem }) => {
  let { time, temp_c, condition, humidity } = elem
  let hr = time.split(' ')[1]
  return (
    <div className='hour-content-main-div'>
      <section className='time'>{hr}</section>
      <img
        className='icon'
        src={`${condition.icon}`}
        alt='icon'
        height='20px'
        width='25px'
      />
      <section className='temp'>{temp_c}C</section>
      <section className='temp'>{humidity}%</section>
    </div>
  )
}

export default HourContent

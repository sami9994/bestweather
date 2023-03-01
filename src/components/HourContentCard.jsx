import React from 'react'
import '../styles/css/HourlyContentCard.css'

const HourContent = ({ elem }) => {
  let { time, temp } = elem
  let hour = time.slice(time.indexOf('T') + 1)
  return (
    <div className='hour-content-main-div'>
      <section className='time'>{hour}</section>
      <section className='temp'>{Math.round(temp)}C</section>
    </div>
  )
}

export default HourContent

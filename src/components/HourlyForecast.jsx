import React from 'react'
import HourContent from './HourContentCard'
import '../styles/css/hourlyForecast.css'
import res from '../hourlyres'
console.log(res.hourly.time.length)
console.log(res.hourly.temperature_2m.length)
let arr = []
for (let index = 0; index < res.hourly.time.length; index++) {
  arr[index] = {
    time: res.hourly.time[index],
    temp: res.hourly.temperature_2m[index],
  }
}
const HourlyForecast = () => {
  return (
    <div className='hourly-forecast'>
      <div className='hourly-forecast-main-div'>
        {arr.map((elem, i) => {
          return <HourContent elem={elem} key={i} />
        })}
      </div>
    </div>
  )
}

export default HourlyForecast

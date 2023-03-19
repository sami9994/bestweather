import React from 'react'
import HourContent from './HourContentCard'
import '../styles/css/hourlyForecast.css'

import { useAppContext } from '../context/globalContext'

const HourlyForecast = () => {
  let { hr, resData } = useAppContext()

  let { forecast } = resData
  return (
    <div className='hourly-forecast'>
      <div className='hourly-forecast-main-div'>
        {forecast.forecastday[0].hour.map((elem, i) => {
          if (hr <= Number(elem.time.split(' ')[1].slice(0, 2))) {
            return <HourContent elem={elem} key={i} />
          }
        })}
      </div>
    </div>
  )
}

export default HourlyForecast

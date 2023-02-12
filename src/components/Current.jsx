import React from 'react'
import '../styles/css/current.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrupal } from '@fortawesome/free-brands-svg-icons'
import {
  faTemperatureHalf,
  faTemperatureArrowUp,
  faTemperatureArrowDown,
  faWind,
} from '@fortawesome/free-solid-svg-icons'
import currentRes from '../currentRes'
import calcDate from '../utils'
const Current = () => {
  let [time, formattedDate] = calcDate(currentRes.dt).split(',')
  return (
    <div className='current-main-section'>
      <section className='icon-desc'>
        <img
          src={`../../icons/different/${currentRes.weather[0].icon}.png`}
          alt='icon'
          className='current-icon'
        />
        <section className='current-desc-main'>
          <h4 className='current-main'>{currentRes.weather[0].main}</h4>
          <p className='current-desc'>{currentRes.weather[0].description}</p>
        </section>
      </section>
      <section className='city-date-time'>
        <h4 className='current-city'>{currentRes.name}</h4>
        <p className='current-date'>{formattedDate}</p>
        <p className='current-time'>{time}</p>
      </section>
      <section className='humidity-wind-temp'>
        <section className='current-temp'>
          <span className='icon'>
            <FontAwesomeIcon icon={faTemperatureHalf} swapOpacity />
            {/* <FontAwesomeIcon icon='fa-regular fa-bed-front' /> */}
          </span>
          <section className='current-temperatures'>
            <p>{currentRes.main.temp}</p>
          </section>
        </section>
        <section className='current-humidity'>
          <span>
            <FontAwesomeIcon icon={faDrupal} />
          </span>
          <p>{currentRes.main.humidity}</p>
        </section>
        <section className='current-wind'>
          <span>
            <FontAwesomeIcon icon={faWind} />
          </span>
          <p>{currentRes.wind.speed}</p>
        </section>
      </section>
    </div>
  )
}

export default Current

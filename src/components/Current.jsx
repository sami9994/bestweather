import React from 'react'
import '../styles/css/current.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrupal } from '@fortawesome/free-brands-svg-icons'
import { faTemperatureHalf, faWind } from '@fortawesome/free-solid-svg-icons'
import currentRes from '../currentRes'
import calcDate from '../utils'
import currentweatherapi from '../currentweatherapi'
import { useAppContext } from '../context/globalContext'
const Current = () => {
  let { resData } = useAppContext()
  let { location, current } = resData
  let [date, hour] = location.localtime.split(' ')
  return (
    <div className='current-main-section'>
      <section className='icon-desc'>
        <img
          src={`${current.condition.icon}`}
          alt='icon'
          className='current-icon'
        />
        <section className='current-desc-main'>
          <p className='current-desc'>{current.condition.text}</p>
        </section>
      </section>
      <section className='city-date-time'>
        <h4 className='current-city'>
          {location.name}
          <p>{location.country}</p>
        </h4>
        <p className='current-date'>
          {date}
          <br />
          {hour}
        </p>
        <p className='current-time'>
          Last Update
          <br />
          {current.last_updated.slice(-6)}
        </p>
      </section>
      <section className='humidity-wind-temp'>
        <section className='current-temp'>
          <span className='icon'>
            <FontAwesomeIcon icon={faTemperatureHalf} swapOpacity />
            {/* <FontAwesomeIcon icon='fa-regular fa-bed-front' /> */}
          </span>
          <section className='current-temperatures'>
            <p>{current.temp_c}C</p>
          </section>
        </section>
        <section className='current-humidity'>
          <span>
            <FontAwesomeIcon icon={faDrupal} />
          </span>
          <p>{current.humidity}%</p>
        </section>
        <section className='current-wind'>
          <span>
            <FontAwesomeIcon icon={faWind} />
          </span>
          <p>{current.wind_kph}km</p>
          <p>
            {current.wind_degree}
            {current.wind_dir}
          </p>
        </section>
      </section>
    </div>
  )
}

export default Current

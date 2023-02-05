import React from 'react'
import '../styles/css/current.css'
import currentRes from '../currentRes'
const Current = () => {
  var date = new Date(currentRes.dt * 1000).toLocaleString()
  let [time, formattedDate] = date.split(',')
  console.log(time, formattedDate)
  return (
    <div className='current-main-section'>
      <section className='icon-desc'>
        <img
          src='../../icons/different/02d.png'
          alt='icon'
          className='current-icon'
        />
        <h4 className='current-main'>{currentRes.weather[0].main}</h4>
        <p className='current-desc'>{currentRes.weather[0].description}</p>
      </section>
      <section className='city-date-time'>
        <h4 className='current-city'>{currentRes.name}</h4>
        <p className='current-date'>{formattedDate}</p>
        <p className='current-time'>{time}</p>
      </section>
      <section className='humidity-wind-temp'>
        <section className='current-temp'>
          <img
            src='../../icons/mine/thermometer.png'
            alt='temp'
            height={'20px'}
            width='20px'
          />
          <section className='current-temperatures'>
            <p>{currentRes.main.temp_max}</p>
            <p>{currentRes.main.temp_min}</p>
          </section>
        </section>
        <section className='current-humidity'>
          <span>💧</span>
          <p>{currentRes.main.humidity}</p>

          <p>
            {currentRes.main.pressure}{' '}
            <span>
              {' '}
              <img
                src='../../icons/mine/atmospheric-pressure-50.png'
                height={'10px'}
                width='10px'
              />
            </span>
          </p>
        </section>
        <section className='current-wind'>
          <img
            src='../../icons/mine/wind-speed.png'
            alt='wind-speed'
            height={'20px'}
            width='20px'
          />
          <p>{currentRes.wind.speed} km</p>
          <p>
            {currentRes.wind.deg}{' '}
            <span>
              <img
                src='../../icons/mine/wind-direction.png'
                alt=''
                height='10px'
                width='10px'
              />
            </span>
          </p>
        </section>
      </section>
    </div>
  )
}

export default Current

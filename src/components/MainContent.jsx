import React from 'react'
import Current from './Current'
import '../styles/css/main-content.css'
import Card from './Card'
import response from '../5res'
import HourlyForecast from './HourlyForecast'
const MainContent = () => {
  return (
    <div className='main-div'>
      <div className='main-content'>
        <section className='current-details'>
          <Current />
        </section>
        <section className='hourly-forecast-details'>
          <HourlyForecast />
        </section>
        <section className='daily-section'>
          {response.list.map((item) => {
            return (
              <Card
                item={item}
                sunrise={response.city.sunrise}
                sunset={response.city.sunset}
                key={item.dt}
              />
            )
          })}
        </section>
      </div>
    </div>
  )
}

export default MainContent

import React from 'react'
import Current from './Current'
import '../styles/css/main-content.css'
import Card from './Card'
import HourlyForecast from './HourlyForecast'
import { useAppContext } from '../context/globalContext'
import Loading from './Loading'
const MainContent = ({}) => {
  let { resData, isLoading } = useAppContext()
  let { forecast } = resData
  return isLoading ? (
    <Loading />
  ) : (
    <div className='main-div'>
      <div className='main-content'>
        <section className='current-details'>
          <Current />
        </section>
        <section className='hourly-forecast-details'>
          <HourlyForecast />
        </section>
        <section className='daily-section'>
          {forecast.forecastday.map((item) => {
            return <Card item={item} key={item.date_epoch} />
          })}
        </section>
      </div>
    </div>
  )
}

export default MainContent

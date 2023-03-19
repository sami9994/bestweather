import response from '../currentRes'
import '../styles/css/card.css'
import calcDate from '../utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrupal } from '@fortawesome/free-brands-svg-icons'
import {
  faTemperatureHalf,
  faVialCircleCheck,
  faGaugeSimpleHigh,
  faAnglesUp,
  faDroplet,
} from '@fortawesome/free-solid-svg-icons'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'
import { useAppContext } from '../context/globalContext'
const Card = ({ item }) => {
  let { hr } = useAppContext()

  let { day, date, astro, hour } = item
  let { avgtemp_c, maxwind_kph, avghumidity, condition, maxtemp_c } = day
  let humidity = hour.filter((item) => {
    return hr === Number(item.time.slice(-5, -3))
  })
  return (
    <div className='card-content'>
      <div className='card-main-content'>
        <section className='icon-main-desc'>
          <img src={`${condition.icon}`} alt='icon' className='icon' />
          <section className='main-desc-date'>
            <h1 className='main-title'>{condition.text}</h1>

            {/* <p className='main-desc'>{}</p> */}
            <p className='main-date'>{date}</p>
          </section>
        </section>
        <section className='humidity-temp'>
          <section className='temp'>
            <FontAwesomeIcon icon={faTemperatureHalf} />
            <p>{maxtemp_c}C</p>
          </section>
          <section className='temp-like'>
            <FontAwesomeIcon icon={faVialCircleCheck} />
            <p>{avgtemp_c}C</p>
          </section>
          <section className='humidity'>
            <FontAwesomeIcon icon={faDrupal} />
            <p>{avghumidity}%</p>
          </section>
        </section>
        <section className='wind-sunrise'>
          <section className='wind icon'>
            <h4>
              <FontAwesomeIcon icon={faGaugeSimpleHigh} /> {maxwind_kph} {' KM'}
              <br />
              <FontAwesomeIcon icon={faAnglesUp} /> {humidity[0].wind_degree}{' '}
              {humidity[0].wind_dir}
            </h4>
            <h4>
              {' '}
              <FontAwesomeIcon icon={faDroplet} /> {humidity[0].humidity}%
            </h4>
          </section>
          <section className='sunrise'>
            <p>
              <FontAwesomeIcon icon={faSun} /> {astro.sunrise}
            </p>
            <p>
              <FontAwesomeIcon icon={faMoon} /> {astro.moonrise}
            </p>
          </section>
        </section>
      </div>
    </div>
  )
}
export default Card

import response from '../currentRes'
import '../styles/css/card.css'
import calcDate from '../utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrupal } from '@fortawesome/free-brands-svg-icons'
import {
  faTemperatureHalf,
  faVialCircleCheck,
  faGaugeSimpleHigh,
  faCircleChevronDown,
} from '@fortawesome/free-solid-svg-icons'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'
const Card = ({ item, sunrise, sunset }) => {
  let date = calcDate(item.dt).replace(' ', '')
  return (
    <div className='card-content'>
      <div className='card-main-content'>
        <section className='icon-main-desc'>
          <img
            src={`../../icons/different/${item.weather[0].icon}.png`}
            alt='icon'
            className='icon'
          />
          <section className='main-desc-date'>
            <h1 className='main-title'>{item.weather[0].main}</h1>

            <p className='main-desc'>{item.weather[0].description}</p>
            <p className='main-date'>{date}</p>
          </section>
        </section>
        <section className='humidity-temp'>
          <section className='temp'>
            <FontAwesomeIcon icon={faTemperatureHalf} />
            <p>{item.main.temp}C</p>
          </section>
          <section className='temp-like'>
            <FontAwesomeIcon icon={faVialCircleCheck} />
            <p>{item.main.feels_like}C</p>
          </section>
          <section className='humidity'>
            <FontAwesomeIcon icon={faDrupal} />
            <p>{item.main.humidity}%</p>
          </section>
        </section>
        <section className='wind-sunrise'>
          <section className='wind icon'>
            <h4>
              <FontAwesomeIcon icon={faGaugeSimpleHigh} /> {item.wind.speed}
            </h4>
            <h4>
              {' '}
              <FontAwesomeIcon icon={faCircleChevronDown} /> {item.wind.deg}
            </h4>
          </section>
          <section className='sunrise'>
            <p>
              <FontAwesomeIcon icon={faSun} /> {calcDate(sunrise).split(',')[1]}
            </p>
            <p>
              <FontAwesomeIcon icon={faMoon} /> {calcDate(sunset).split(',')[1]}
            </p>
          </section>
        </section>
      </div>
    </div>
  )
}
export default Card

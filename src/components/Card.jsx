import response from '../res'
import '../styles/css/card.css'
const Card = () => {
  console.log(response)
  return (
    <div className='card-content'>
      <div className='card-main-content'>
        <section className='icon-main-desc'>
          <img
            src={`../../icons/different/${'09d'}.png`}
            alt='icon'
            className='icon'
          />
          <h1 className='main-title'>{response.weather[0].main}</h1>
        </section>
        <section className='humidity-heat-wind-desc'>
          <section className='humidity'>
            <span>💧</span>
            <p>{response.main.humidity}</p>

            <p>
              {response.main.pressure}{' '}
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
          <section className='wind'>
            <img
              src='../../icons/mine/wind-speed.png'
              alt='wind-speed'
              height={'20px'}
              width='20px'
            />
            <p>{response.wind.speed} km</p>
            <p>
              {response.wind.deg}{' '}
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
          <section className='temp'>
            <img
              src='../../icons/mine/thermometer.png'
              alt='temp'
              height={'20px'}
              width='20px'
            />
            <p>{response.main.temp_max}</p>
            <p>{response.main.temp_min}</p>
          </section>
        </section>
        <section className='desc'>
          <p>{new Date(response.dt * 1000).toLocaleString()}</p>
          <p className='explanation'>{response.weather[0].description}</p>
        </section>
      </div>
    </div>
  )
}
export default Card

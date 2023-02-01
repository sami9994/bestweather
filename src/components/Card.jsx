import response from '../res'
import '../styles/css/card.css'
const Card = () => {
  console.log(response)
  return (
    <div className='card-content'>
      <div className='card-main-content'>
        <section className='icon-main-desc'>
          <img
            src='../../icons/different/01d.png'
            alt='icon'
            className='icon'
          />
          <h1 className='main-title'>Drizzle</h1>
        </section>
        <section className='humidity-heat-wind-desc'>
          <section className='humidity'>
            <p>💧</p>
            <p>{response.main.humidity}</p>
            <img
              src='../../icons/mine/atmospheric-pressure-50.png'
              height={'30px'}
              width='30px'
            />
            <p>{response.main.pressure}</p>
          </section>
          <section className='wind'></section>
          <section className='temp'></section>
        </section>
        <section className='desc'></section>
      </div>
    </div>
  )
}
export default Card

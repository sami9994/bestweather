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
          <h1 className='main-title'>Description</h1>
        </section>
        <section className='humidity-heat-wind-desc'>
          <section className='humidity'></section>
          <section className='wind'></section>
          <section className='temp'></section>
        </section>
        <section className='desc'></section>
      </div>
    </div>
  )
}
export default Card

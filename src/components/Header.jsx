import React from 'react'
import FontAwesomeIcon from '@fortawesome/fontawesome-free'
import '../styles/css/Header.css'
const Header = () => {
  return (
    <header className='header'>
      <div className='main-header'>
        <section className='title'>BWC</section>
        <section className='search-field'>
          <form className='search-form'>
            <input
              type='text'
              placeholder='City'
              onChange={() => console.log('city search')}
            />
            <button className='search-btn' type='submit'>
              <FontAwesomeIcon icon='fa-sharp fa-solid fa-magnifying-glass-location' />
            </button>
          </form>
        </section>
      </div>
    </header>
  )
}

export default Header

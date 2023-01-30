import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

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
              className='input-search-field'
            />
            <button className='search-btn' type='submit'>
              <SearchOutlinedIcon />
            </button>
          </form>
        </section>
      </div>
    </header>
  )
}

export default Header

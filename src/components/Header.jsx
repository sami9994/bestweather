import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import CloudSyncIcon from '@mui/icons-material/CloudSync'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'
import '../styles/css/Header.css'
const Header = () => {
  return (
    <div className='header-section'>
      <div className='main-header'>
        <section className='title'>
          <h1 className='title-header'>WBS</h1>
          <ThunderstormIcon />
        </section>
        <section className='search-field'>
          <form className='search-form'>
            <input
              type='text'
              placeholder='Search City'
              onChange={() => console.log('city search')}
              className='input-search-field'
              min={'2'}
              required
            />
            <button className='search-btn' type='submit'>
              <SearchOutlinedIcon />
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Header

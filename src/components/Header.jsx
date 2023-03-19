import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'
import '../styles/css/Header.css'
import { useAppContext } from '../context/globalContext'
const HeaderSection = () => {
  let { handleChange, handleSubmit } = useAppContext()

  return (
    <div className='header-section'>
      <div className='main-header'>
        <section className='title'>
          <h1 className='title-header'>WBS</h1>
          <ThunderstormIcon />
        </section>
        <section className='search-field'>
          <form className='search-form' onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Search City'
              onChange={handleChange}
              className='input-search-field'
              min={'2'}
              required
            />
            <button className='search-btn'>
              <SearchOutlinedIcon />
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default HeaderSection

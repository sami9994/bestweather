import React from 'react'
import Current from './Current'
import '../styles/css/main-content.css'
import Card from './Card'

const MainContent = () => {
  return (
    <div className='main-div'>
      <div className='main-content'>
        <section className='current-details'>
          <Current />
        </section>
        <section className='daily-section'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </div>
    </div>
  )
}

export default MainContent

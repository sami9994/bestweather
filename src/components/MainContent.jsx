import React from 'react'
import '../styles/css/main-content.css'
import Card from './Card'
import Header from './header'
const MainContent = () => {
  return (
    <div className='main-div'>
      <div className='main-content'>
        <section className='daily-section'>
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

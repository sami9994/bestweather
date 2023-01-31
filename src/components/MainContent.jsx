import React from 'react'
import '../styles/css/main-content.css'
import Card from './Card'
import Header from './header'
const MainContent = () => {
  return (
    <div className='main-div'>
      <section className='main-content'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  )
}

export default MainContent

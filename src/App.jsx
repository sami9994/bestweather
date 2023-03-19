import axios from 'axios'
import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/header'
import MainContent from './components/MainContent'
import { useAppContext } from './context/globalContext'

const OPEN_WEATHER_API_KEY = 'c65334c1e2a14d3497e95805230502'
const base_url = 'http://api.weatherapi.com/v1'

function App() {
  return (
    <main className='main'>
      <Header />
      <MainContent />
      {/* <MapContent /> */}
      <Footer />
    </main>
  )
}

export default App

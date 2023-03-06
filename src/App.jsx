import axios from 'axios'
import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/header'
import MainContent from './components/MainContent'
import { useAppContext } from './context/globalContext'

function App() {
  let { first } = useAppContext()
  console.log(first)

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

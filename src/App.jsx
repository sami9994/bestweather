import axios from 'axios'
import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/header'
import MainContent from './components/MainContent'
let date = new Date()
let toDay = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

const options = {
  method: 'GET',
  url: 'https://meteostat.p.rapidapi.com/stations/hourly',
  params: {
    station: '10637',
    start: '2023-03-05',
    end: '2023-03-05',
    tz: 'Europe/Berlin',
  },
  headers: {
    'X-RapidAPI-Key': '9f7af8a069msh5eb19c4377d9482p150b48jsn67361a902f7b',
    'X-RapidAPI-Host': 'meteostat.p.rapidapi.com',
  },
}
function App() {
  let d = new Intl.DateTimeFormat('en-us', {
    dateStyle: 'medium',
  })
  console.log(toDay)
  const [hours, setHours] = useState([])
  //   //five days
  // axios
  //   .get(
  //     'https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=14fcee7fe415c6637d5231d75351b400'
  //   )
  //   .then((res) => console.log(res.data))
  //   .catch((e) => console.log(e))
  //  ---------------------------
  // axios
  //   .get(
  //     'https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=14fcee7fe415c6637d5231d75351b400'
  //   )
  //   .then((res) => console.log(res.data))
  //   .catch((e) => console.log(e))

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     // console.log(response)
  //     setHours([...response.data.data])
  //     console.log(hours)
  //   })
  //   .catch(function (error) {
  //     console.error(error)
  //   })

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

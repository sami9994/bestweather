import './App.css'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import HeaderSection from './components/Header'
const OPEN_WEATHER_API_KEY = 'c65334c1e2a14d3497e95805230502'
const base_url = 'http://api.weatherapi.com/v1'

function App() {
  return (
    <main className='main'>
      <HeaderSection />
      <MainContent />
      {/* <MapContent /> */}
      <Footer />
    </main>
  )
}

export default App

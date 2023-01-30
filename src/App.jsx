import axios from 'axios'
import './App.css'
import Footer from './components/Footer'
import Header from './components/header'
import MainContent from './components/MainContent'

function App() {
  // axios
  //   .get(
  //     'https://api.openweathermap.org/data/2.5/weather?q=London&appid=14fcee7fe415c6637d5231d75351b400'
  //   )
  //   .then((res) => console.log(res.data))
  //   .catch((e) => console.log(e))
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App

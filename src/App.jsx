import axios from 'axios'
import './App.css'
import Footer from './components/Footer'
import Header from './components/header'
import MainContent from './components/MainContent'

function App() {
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

  return (
    <main>
      <Header />
      <MainContent />
      <Footer />
    </main>
  )
}

export default App

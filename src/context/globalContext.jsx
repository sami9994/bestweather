import React, { useContext, useState } from 'react'
let date = new Date()
let today = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

const options = {
  method: 'GET',
  url: 'https://meteostat.p.rapidapi.com/stations/hourly',
  params: {
    station: '10637',
    start: today,
    end: today,
    tz: 'Europe/Berlin',
  },
  headers: {
    'X-RapidAPI-Key': '9f7af8a069msh5eb19c4377d9482p150b48jsn67361a902f7b',
    'X-RapidAPI-Host': 'meteostat.p.rapidapi.com',
  },
}
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
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

  let first = 'sdf'
  return <AppContext.Provider value={{ first }}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  return useContext(AppContext)
}
export { AppProvider }

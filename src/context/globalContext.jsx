import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

// import res from '../currentweatherapi'
let apiKey = import.meta.env.VITE_API_KEY
let data = {
  forecast: {},
  location: {},
  current: {},
}
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  let hr = new Date().getHours()
  let [resData, setResData] = useState(data)
  let [town, setTown] = useState('istanbul')
  let [isLoading, setIsLoading] = useState(true)

  const handleChange = ({ target }) => {
    setTown(target.value)
  }
  let doSearch = async (city) => {
    let res = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`
    )

    if (res.status === 200) {
      console.log(res)
      let forecastData = res.data
      setResData(forecastData)
      setIsLoading(false)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    doSearch(town)
    // e.target.value = ''
  }
  useEffect(() => {
    doSearch(town)
  }, [])
  return (
    <AppContext.Provider
      value={{
        hr,
        resData,
        town,
        isLoading,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
export { AppProvider }

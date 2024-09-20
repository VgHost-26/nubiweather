import { useEffect, useState } from "react"
import nubisoftLogo from "./assets/nubisoft.svg"
import axios from "axios"
import CurrentWeather from "./Components/CurrentWeather"
import ForecastWeather from "./Components/ForecastWeather"

const apiUrl = "http://api.weatherapi.com/v1"
const apiKey = "cad095b8ab0c448b8de112929241909"
const FORECAST = "forecast"
const CURRENT = "current"

const myCities = ["Gliwice", "Hamburg"]

function App() {
  const [city, setCity] = useState(myCities[0])
  const [weatherData, setWeatherData] = useState("")
  const [unit, setUnit] = useState("c")


  const fetchWeather = () => {
    axios
      .get(
        `${apiUrl}/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no&lang=pl`
      )
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          setWeatherData(response.data)
        } else {
          console.error(response)
        }
      })
      .catch(error => {
        console.error(error)
      })
  }

  useEffect(() => {
    fetchWeather()
    console.log(weatherData)
  }, [])

  return (
    <>
      <div id="header">
        <a href="https://nubisoft.io/" target="_blank">
          <img src={nubisoftLogo} className="nubi-logo" alt="Nubisoft logo" />
        </a>
        <h1>NubiWeather</h1>
      </div>
      <div className="flex justify-center flex-col gap-4 items-center">
        <span className="material-symbols-outlined">settings</span>

        {weatherData ? (
          <CurrentWeather
            data={weatherData}
            unit={unit}
            refresh={fetchWeather}
          />
        ) : (
          <>{fetchWeather()}</>
        )}
        {weatherData ? (
          <ForecastWeather
            days={weatherData.forecast.forecastday}
            unit={unit}
          />
        ) : (
          <>{fetchWeather()}</>
        )}
      </div>
    </>
  )
}

export default App

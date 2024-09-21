import { useEffect, useState } from "react"
import nubisoftLogo from "./assets/nubisoft.svg"
import axios from "axios"
import Menu from "./Components/Menu"
import Content from "./Components/Content"

const apiUrl = "https://api.weatherapi.com/v1"
const apiKey = "cad095b8ab0c448b8de112929241909"

const myCities = ["Gliwice", "Hamburg"]

function App() {
  const [city, setCity] = useState(myCities[0])
  const [weatherData, setWeatherData] = useState("")
  const [unit, setUnit] = useState("c")
  const [isMenuHidden, setMenuIsHidden] = useState(true)

  const fetchWeather = () => {
    axios
      .get(
        `${apiUrl}/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`
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

 
  const showHideMenu = () => {
    setMenuIsHidden(!isMenuHidden)
  }
  const changeCity = city => {
    setCity(city)
    showHideMenu()
  }

  useEffect(() => {
    fetchWeather()
  }, [city])

  useEffect(() => {
    if (!weatherData) return
    if (weatherData.current.condition.icon.indexOf("night") === -1) {
      document.body.setAttribute("data-theme", "light")
    } else {
      document.body.setAttribute("data-theme", "night")
    }
  }, [weatherData])

  return (
    <>
      <Menu
        myCities={myCities}
        isMenuHidden={isMenuHidden}
        showHideMenu={showHideMenu}
        changeCity={changeCity}
        choosenCity={city}
      />

      <div id="header">
        <input
          type="button"
          onClick={showHideMenu}
          translate="no"
          className="material-symbols-outlined menu-button"
          value={"menu"}
        />
        <a href="https://nubisoft.io/" target="_blank">
          <img src={nubisoftLogo} className="nubi-logo" alt="Nubisoft logo" />
        </a>
        <h1>NubiWeather</h1>
      </div>

      <Content
        weatherData={weatherData}
        unit={unit}
        fetchWeather={fetchWeather}
      />
    </>
  )
}

export default App

{
  /*  flex justify-center flex-col gap-4 items-center flex-wrap */
}

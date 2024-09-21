import { useEffect, useState } from "react"
import nubisoftLogo from "./assets/nubisoft.svg"
import axios from "axios"
import CurrentWeather from "./Components/CurrentWeather"
import ForecastWeather from "./Components/ForecastWeather"
import HourWeather from "./Components/HourWeather"
import Menu from "./Components/Menu"
import Content from "./Components/Content"

const apiUrl = "https://api.weatherapi.com/v1"
const apiKey = "cad095b8ab0c448b8de112929241909"
const FORECAST = "forecast"
const CURRENT = "current"

const myCities = ["Gliwice", "Hamburg"]

function App() {
  const [city, setCity] = useState(myCities[0])
  const [weatherData, setWeatherData] = useState("")
  const [multipleWeatherData, setMultipleWeatherData] = useState([])
  const [unit, setUnit] = useState("c")
  const [isMenuHidden, setMenuIsHidden] = useState(true)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

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
  const fetchMultipleWeather = async () => {
    // setMultipleWeatherData([])

    try {
      const promices = myCities.map(city =>
        axios.get(
          `${apiUrl}/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`
        )
      )

      const results = await Promise.all(promices)
      // console.log(results);
      setMultipleWeatherData(results)


      // results.forEach(response => {
      //   console.log("multiple", response.data)
      //   setMultipleWeatherData([...multipleWeatherData, response.data])
      // })
    } catch (error) {
      console.error(error)
    }

    // for (const ct of myCities) {
    //   axios
    //     .get(
    //       `${apiUrl}/forecast.json?key=${apiKey}&q=${ct}&days=7&aqi=no&alerts=no`
    //     )
    //     .then(response => {
    //       console.log("multi", response)
    //       if (response.status === 200) {
    //         setMultipleWeatherData([...multipleWeatherData, response.data])
    //       } else {
    //         console.error(response)
    //       }
    //     })
    //     .catch(error => {
    //       console.error(error)
    //     })
    // }
  }
  const handleWindowSizeChange = () => {
    setWindowWidth(window.innerWidth)
    console.log()
  }

  const showHideMenu = () => {
    setMenuIsHidden(!isMenuHidden)
  }
  const changeCity = city => {
    setCity(city)
    showHideMenu()
  }

  useEffect(() => {
    if (windowWidth > 800) {
      fetchMultipleWeather()
    } else {
      fetchWeather()
    }
    // console.log(weatherData)
    window.addEventListener("resize", handleWindowSizeChange)
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange)
    }
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

      {windowWidth > 800 ? (
        <>
          {myCities.map((ct, i) => {
            return (
              <>
                <div key={i} className="weather-list">
                  <Content
                    weatherData={
                      multipleWeatherData ? (multipleWeatherData[i].data) : null
                    }
                    unit={unit}
                    fetchWeather={fetchMultipleWeather}
                  />
                </div>
              </>
            )
          })}
        </>
      ) : (
        <>
          <Content
            weatherData={weatherData}
            unit={unit}
            fetchWeather={fetchWeather}
          />
        </>
      )}
    </>
  )
}

export default App

{
  /*  flex justify-center flex-col gap-4 items-center flex-wrap */
}

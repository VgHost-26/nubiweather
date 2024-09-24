import React from "react"
import CurrentWeather from "./CurrentWeather"
import HourWeather from "./HourWeather"
import ForecastWeather from "./ForecastWeather"
import { dayNamesShort, monthNamesShort } from "../dayMonthNames"

const dateConvert = date => {
  date = date.split(" ")[0]
  const dateObj = new Date(date)
  const day = dateObj.getDate()
  const dayName = dayNamesShort[dateObj.getDay()]
  const monthName = monthNamesShort[dateObj.getMonth()]
  return `${dayName} ${day} ${monthName}`
}

function Content({ weatherData, unit = "c", fetchWeather }) {
  if (weatherData) dateConvert(weatherData.location.localtime)
  return (
    <div className="content">
      <div className="title">
        {weatherData ? (
          <>
            <span className="font-bold">{weatherData.location.name}</span>,{" "}
            <span className="font-thin">{weatherData.location.country}</span>{" "}
            <span className="font-semibold text-5xl opacity-75">
              {dateConvert(weatherData.location.localtime)}
            </span>
          </>
        ) : (
          <>
            <span className="font-bold">City</span>,{" "}
            <span className="font-thin">Country</span>
          </>
        )}
      </div>

      {weatherData ? (
        <>
          <CurrentWeather
            data={weatherData}
            unit={unit}
            refresh={fetchWeather}
          />

          <HourWeather
            data={weatherData.forecast.forecastday[0].hour}
            unit={unit}
            refresh={fetchWeather}
          />

          <ForecastWeather
            days={weatherData.forecast.forecastday}
            unit={unit}
          />
        </>
      ) : (
        <>
          <CurrentWeather loading={true} />
          <HourWeather loading={true} />
          <ForecastWeather loading={true} />
        </>
      )}
    </div>
  )
}

export default Content

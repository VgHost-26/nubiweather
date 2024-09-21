import React from 'react'
import CurrentWeather from './CurrentWeather'
import HourWeather from './HourWeather'
import ForecastWeather from './ForecastWeather'


function Content({weatherData, unit ='c', fetchWeather}) {
  return (
    <div className="content">
          <div className="title">
            {weatherData ? (
              <>
                <span>{weatherData.location.name}</span>,{" "}
                {weatherData.location.country}
              </>
            ) : (
              <>
                <span>City</span>, Country
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
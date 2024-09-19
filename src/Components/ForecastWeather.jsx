import React from "react"
import ForecastDay from "./ForecastDay"

function ForecastWeather({ days = [], unit = "c" }) {
  return (
    <div id="ForecastWeather" className="glass-tile">
      {days.map(day => {
        return (
          <ForecastDay
            date={day.date}
            temp={unit ? day.day.maxtemp_c + "°C" : day.day.maxtemp_f + "°F"}
            icon={day.day.condition.icon}
            alt={day.day.condition.text}
          />
        )
      })}
    </div>
  )
}

export default ForecastWeather

import React from "react"
import ForecastDay from "./ForecastDay"

function ForecastWeather({ days = [], unit = "c" }) {
  return (
    <div id="ForecastWeather" className="glass-tile">
      {days.map(day => {
        return (
          <ForecastDay
            date={day.date}
            temp={unit ? Math.round(day.day.maxtemp_c) + "°C" : Math.round(day.day.maxtemp_f) + "°F"}
            icon={day.day.condition.icon}
            alt={day.day.condition.text}
            key={day.date}
          />
        )
      })}
    </div>
  )
}

export default ForecastWeather

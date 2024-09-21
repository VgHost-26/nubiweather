import React from "react"
import ForecastDay from "./ForecastDay"
import { BarLoader } from "react-spinners"

function ForecastWeather({ days = [], unit = "c", loading=false }) {
  return (
    <div id="ForecastWeather" className="glass-tile">
      {!loading ? (
        <>
          {days.map(day => {
            return (
              <ForecastDay
                date={day.date}
                temp={
                  unit
                    ? Math.round(day.day.maxtemp_c) + "°C"
                    : Math.round(day.day.maxtemp_f) + "°F"
                }
                icon={day.day.condition.icon}
                alt={day.day.condition.text}
                key={day.date}
              />
            )
          })}
        </>
      ) : (
        <>
          <BarLoader color="#fff" loading={true} width={"80%"} />
        </>
      )}
    </div>
  )
}

export default ForecastWeather

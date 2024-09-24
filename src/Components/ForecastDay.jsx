import React from "react"
import { dayNames } from "../dayMonthNames"

function ForecastDay({ date = "", temp = "", icon = "", alt = "" }) {
  const dateObj = new Date(date)
  return (
    <div className="forecast-day">
      <span>{dayNames[dateObj.getDay()]}</span>
      <img src={icon} alt={alt} />
      <span className="temp">{temp}</span>
    </div>
  )
}

export default ForecastDay

import React from "react"

function CurrentWeather({ data = "", unit = "c", refresh }) {
  return (
    <div id="CurrentWeather" className="glass-tile">
      <img className="weather-icon" src={data.current.condition.icon} />
      <span className="temp">
        {unit === "c"
          ? data.current.temp_c + "°C"
          : data.current.temp_f + +"°F"}
      </span>
      <span className="city">{data.location.name}</span>
      <span className="update-time">
        {data.current.last_updated.split(" ")[1]}
        <input onClick={()=>refresh('Gliwice')} type="button" className="material-symbols-outlined thin" value={'sync'}/>
      </span>
    </div>
  )
}

export default CurrentWeather

import React from "react"

// const temperature = {
//   c: Math.round(data.current.temp_c) + "°C",
//   f: Math.round(data.current.temp_f) + "°F"
// }

function CurrentWeather({ data = "", unit = "c", refresh }) {
  return (
    <div id="CurrentWeather" className="glass-tile">
      <img
        className="weather-icon"
        src={data.current.condition.icon}
        alt={data.current.condition.text}
      />
      <span className="temp">
        {/* temperature[unit] */}
        {unit === "c"
          ? Math.round(data.current.temp_c) + "°C"
          : Math.round(data.current.temp_f) + "°F"}
      </span>
      <span className="city">{data.location.name}</span>
      <span className="update-time">
        {data.current.last_updated.split(" ")[1]}
        <input
          onClick={refresh}
          type="button"
          className="material-symbols-outlined thin"
          value={"sync"}
        />
      </span>
    </div>
  )
}

export default CurrentWeather

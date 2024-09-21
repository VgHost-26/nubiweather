import React from "react"
import { PuffLoader } from "react-spinners"

function CurrentWeather({ data = "", unit = "c", refresh, loading=false }) {
  return (
    <div id="CurrentWeather" className="glass-tile">
      {!loading ? (
        <>
          <img
            className="weather-icon"
            src={data.current.condition.icon}
            alt={data.current.condition.text}
          />
          <span className="temp">
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
              translate="no"
              value={"sync"}
            />
          </span>
        </>
      ) : (
        <>
          <PuffLoader
            color={"#fff"}
            loading={true}
            size={50}
            speedMultiplier={1}
          />
        </>
      )}
    </div>
  )
}

export default CurrentWeather

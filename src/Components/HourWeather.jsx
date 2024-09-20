import React from "react"
import {
  Area,
  AreaChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts"

// const data = [
//   { name: "day1", temp_c: "10", humidity: "0" },
//   { name: "day2", temp_c: "40", humidity: "10" },
//   { name: "day3", temp_c: "30", humidity: "20" },
//   { name: "day4", temp_c: "20", humidity: "0" },
// ]

function HourWeather({ data }) {
  const images = data.map(hour => {
    return hour.condition.icon
  })

  const CustomTick = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <image x={0} y={0} dy={16} href={images[payload.index]} />
        <text fill="white" x={0} y={0} textAnchor="start" transform="translate(10, 10)" fontWeight={500}>
          {payload.value.split(" ")[1]}
        </text>
      </g>
    )
  }

  console.log(data)
  return (
    <div id="HourWeather" className="glass-tile">
      <ResponsiveContainer >
        <AreaChart width={300} height={400} data={data} margin={0} >
          <Area
            type={"monotone"}
            dataKey={"chance_of_rain"}
            name="Rain probability"
            stroke="#0291de"
            fill="#0291de"
          />
          <Area
            type={"monotone"}
            dataKey={"temp_c"}
            name="Temperature"
            stroke="#deb902"
            fill="#ad9502"
          />
          <XAxis
            dataKey={"time"}
            orientation="top"
            stroke="white"
            axisLine={false}
            tickLine={false}
            tickSize={20}
            tick={<CustomTick />}
          />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default HourWeather

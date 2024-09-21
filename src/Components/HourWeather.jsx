import React from "react"
import { BarLoader } from "react-spinners"
import {
  Area,
  AreaChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts"

function HourWeather({ data = "", loading = false }) {
  let images = []
  if (data) {
    images = data.map(hour => {
      return hour.condition.icon
    })
  }

  const CustomTick = ({ x, y, payload }) => {
    if (data == undefined) return

    return (
      <g transform={`translate(${x - 30},${y})`}>
        <image x={0} y={10} dy={16} href={images[payload.index]} />
        <text
          fill="white"
          x={0}
          y={0}
          textAnchor="start"
          transform="translate(10, 5)"
          fontWeight={500}
        >
          {payload.value.split(" ")[1]}
        </text>
      </g>
    )
  }

  return (
    <div id="HourWeather" className="glass-tile">
      {!loading ? (
        <>
          <ResponsiveContainer minWidth={300} minHeight={200} height="100%">
            <AreaChart width={600} height={200} data={data} margin={0}>
              <Area
                type={"monotone"}
                dataKey={"temp_c"}
                name="Temperature"
                stroke="none"
                fill="gold"
                fillOpacity={0.7}
              />
              <Area
                type={"monotone"}
                dataKey={"chance_of_rain"}
                name="Rain probability"
                stroke="none"
                fill="aqua"
                fillOpacity={0.5}
              />
              <XAxis
                dataKey={"time"}
                orientation="top"
                stroke="white"
                axisLine={false}
                tickLine={false}
                tickSize={20}
                allowDataOverflow
                tick={<CustomTick />}
              />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
        </>
      ) : (
        <>
          <BarLoader color="#fff" loading={true} width={"50%"} />
        </>
      )}
    </div>
  )
}

export default HourWeather

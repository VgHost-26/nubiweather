import React from 'react'

const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]
const dayNamesShort = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
]

function ForecastDay({date='', temp='', icon='', alt=''}) {

    const jsDate = new Date(date)
  return (
    <div className='forecast-day'>
        <span>{dayNames[jsDate.getDay()]}</span>
        <img src={icon} alt={alt}/>
        <span className='temp'>{temp}</span>
    </div>
  )
}

export default ForecastDay
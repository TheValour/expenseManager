import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

export default function Chart(props) {
  const dataPointValues = props.dataNumber.map(datP => datP.value);
  const totalMaximun = Math.max(...dataPointValues);
  return (
    <div className='chart'>
      {
        props.dataNumber.map(data => 
        < ChartBar key = {data.label} 
          value = {data.value}
          label = {data.label} 
          maxValue = {totalMaximun}  />
      )}
    </div>
  )
}

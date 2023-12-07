import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const dataValueArr = props.dataPoints.map(list=>list.value)
  const maxValue = Math.max(...dataValueArr)

  return (
    <div className='chart'>
      {
        props.dataPoints.map(dataPoint =>
          < ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            max={maxValue}
            label={dataPoint.label}
          />)
      }
    </div>
  )
}
export default Chart;

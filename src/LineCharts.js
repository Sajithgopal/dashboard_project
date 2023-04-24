import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,CartesianGrid,Legend,Tooltip,} from 'recharts'
import {pdata} from './pdata'
import React from 'react'

const LineCharts= () => {
  return (
    <>
      <h1 className="chart-heading" > Line Chart</h1>
      <ResponsiveContainer width="100%" aspect={2.5}>
        <LineChart
          data={pdata}
          width={200}
          height={500}
          margin={{
            top: 10,
            right:30,
            left: 30,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
          <XAxis
            dataKey="name"
            interval={'preserveStartEnd'}
            tickFormatter={(value) => value + " Programming"}>
          </XAxis>

          <YAxis />

          <Tooltip />

          <Legend />

          <Line
            dataKey="student"
            stroke='red'
            activeDot={{ r: 5 }}>
          </Line>

          <Line
            dataKey="fees"
            stroke='green'
            activeDot={{ r: 5 }}>
          </Line>

        </LineChart>

      </ResponsiveContainer></>

  )
}


export default LineCharts;
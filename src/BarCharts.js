import{ResponsiveContainer,XAxis,YAxis,CartesianGrid,Legend,Tooltip,BarChart,Bar} from 'recharts'
import React from 'react'
import { pdata } from './pdata'

const Barcharts = () => {
    return (
        <><h1 className="chart-heading"> Bar Chart</h1>
        <ResponsiveContainer width="100%" aspect={2.5}>
            <BarChart
                data={pdata}
                width={500}
                height={300}
                margin={{ top: 5, right:30,left: 30, bottom: 5 }}>

                <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                <XAxis
                    dataKey="name"
                    tickFormatter={(value) => value + " Programming"}>
                </XAxis>

                <YAxis />

                <Tooltip />

                <Legend />

                <Bar
                    dataKey="student"
                    stroke='red'
                    fill="#8884d8">
                </Bar>

                <Bar
                    dataKey="fees"
                    stroke='green'>
                </Bar>

            </BarChart>
        </ResponsiveContainer></>
    )
}


export default Barcharts;
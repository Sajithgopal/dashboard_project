import {ResponsiveContainer,XAxis,YAxis,CartesianGrid,Legend,Tooltip, AreaChart, Area,} from 'recharts'
import {pdata} from './pdata'
import React from 'react'

function AreaCharts() {

    return (
        <><h1 className="chart-heading"> Area Chart</h1>
        <ResponsiveContainer width="100%" aspect={2.5}>
            <AreaChart 
            data={pdata}
             width={500} 
             height={300}
             margin={{ 
                top: 5, 
                right: 30,
                left: 20, 
                bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3">

                </CartesianGrid>
                <XAxis 
                dataKey="name"
                 tickFormatter={(value) => value + " Programming"}>

                 </XAxis>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Area type="monotone" dataKey="student" stroke='red' activeDot={{ r: 5 }}></Area>
                <Area type="monotone" dataKey="fees" stroke='green' activeDot={{ r: 5 }}></Area>
            </AreaChart>
        </ResponsiveContainer></>
    );
}
    

export default AreaCharts;
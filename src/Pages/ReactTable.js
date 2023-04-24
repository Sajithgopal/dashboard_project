import React from 'react';
import './ReactTable.css'

function ReactTable () {
  const data=[
    {
      name: 'Python',
      student: 13,
      fees: 10
    },
    {
      name: 'PHP',
      student: 5,
      fees: 10
    },
    {
      name: 'Java',
      student: 10,
      fees: 5
    },
    {
      name: 'C#',
      student: 9,
      fees: 4
    },
    {
      name: 'C++',
      student: 10,
      fees: 8
    }
  ]

  return(
    <div>
        <table>
            <thead>
                <tr>
                    <th> NAME </th>
                    <th> STUDENT</th>
                    <th> FEES </th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((val,i)=>
                    <tr>
                        <td>{val.name}</td>
                        <td>{val.student}</td>
                        <td>{val.fees}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )


}

export default ReactTable
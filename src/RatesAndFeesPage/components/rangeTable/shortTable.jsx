import React from "react"
import './shortTable.css'


const shortTable = () =>{

    return (
        <>

<table className="tableShrinker">
 
  <thead>
    <tr>
      
      <th scope="col">Amount</th>
      <th scope="col">Period</th>
      <th scope="col">Rate(APR)</th>
      <th scope="col">Monthly</th>
      <th scope="col">Total Paid</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Account">$2,000</td>
      <td data-label="Due Date">12 mos</td>
      <td data-label="Amount">6.99%</td>
      <td data-label="Period">$2,269.44</td>
      <td data-label="Period">$2,269.44</td>
     
    </tr>
    <tr>
      <td scope="row" data-label="Account">$2,000</td>
      <td data-label="Due Date">12 mos</td>
      <td data-label="Amount">6.99%</td>
      <td data-label="Period">$2,269.44</td>
      <td data-label="Period">$2,269.44</td>
      
    </tr>
    <tr>
      <td scope="row" data-label="Account">$2,000</td>
      <td data-label="Due Date">12 mos</td>
      <td data-label="Amount">6.99%</td>
      <td data-label="Period">$2,269.44</td>
      <td data-label="Period">$2,269.44</td>
     
    </tr>
    <tr>
      <td scope="row" data-label="Acount">$2,000</td>
      <td data-label="Due Date">12 mos</td>
      <td data-label="Amount">6.99%</td>
      <td data-label="Period">$2,269.44</td>
      <td data-label="Period">$2,269.44</td>
      
    </tr>

    <tr>
      <td scope="row" data-label="Acount">$2,000</td>
      <td data-label="Due Date">12 mos</td>
      <td data-label="Amount">6.99%</td>
      <td data-label="Period">$2,269.44</td>
      <td data-label="Period">$2,269.44</td>
     
    </tr>
  </tbody>
</table>

</>
 )
}

export default shortTable
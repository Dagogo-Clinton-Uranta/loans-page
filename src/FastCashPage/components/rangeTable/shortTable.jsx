import React from "react"
import './shortTable.css'


const shortTable = () =>{

    return (
        <>

<table className="tableShrinker">
 
  <thead>
    <tr>
      <th scope="col">Credit Score</th>
      <th scope="col">Amount</th>
      <th scope="col">Rate(APR)</th>
      <th scope="col">Total Paid</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Account">2 Years</td>
      <td data-label="Due Date">$8,500</td>
      <td data-label="Amount">6.99%</td>
      <td data-label="Period">45</td>
     
    </tr>
    <tr>
      <td scope="row" data-label="Account">3 Years</td>
      <td data-label="Due Date">$8,500</td>
      <td data-label="Amount">6.99%</td>
      <td data-label="Period">26</td>
      
    </tr>
    <tr>
      <td scope="row" data-label="Account">4 Years</td>
      <td data-label="Due Date">$8,500</td>
      <td data-label="Amount">6.99%</td>
      <td data-label="Period">10</td>
     
    </tr>
    <tr>
      <td scope="row" data-label="Acount">5 Years</td>
      <td data-label="Due Date">$8,500</td>
      <td data-label="Amount">6.99%</td>
      <td data-label="Period">5</td>
      
    </tr>

    <tr>
      <td scope="row" data-label="Acount">6 Years</td>
      <td data-label="Due Date">$8,500</td>
      <td data-label="Amount">6.99%</td>
      <td data-label="Period">5</td>
     
    </tr>
  </tbody>
</table>

</>
 )
}

export default shortTable
import React from "react"
import './standardTable.css'


const standardTable = () =>{

    return (
        <>

<table>
 
  <thead>
    <tr>
      <th scope="col">Term</th>
      <th scope="col">Loan Amount</th>
      <th scope="col">Rate(APR)</th>
      <th scope="col">No of Payments</th>
      <th scope="col">Monthly Payment</th>
      <th scope="col">Total Payments</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Account">2 Years</td>
      <td data-label="Due Date">$8,500</td>
      <td data-label="Amount">6.99%</td>
      <td data-label="Period">45</td>
      <td>$8,500</td>
      <td>$30,000</td>
    </tr>
    <tr>
      <td scope="row" data-label="Account">3 Years</td>
      <td data-label="Due Date">$8,500</td>
      <td data-label="Amount">6.99%</td>
      <td data-label="Period">26</td>
      <td>$8,500</td>
      <td>$30,000</td>
    </tr>
    <tr>
      <td scope="row" data-label="Account">4 Years</td>
      <td data-label="Due Date">$8,500</td>
      <td data-label="Amount">6.99%</td>
      <td data-label="Period">10</td>
      <td>$8,500</td>
      <td>$30,000</td>
    </tr>
    <tr>
      <td scope="row" data-label="Acount">5 Years</td>
      <td data-label="Due Date">$8,500</td>
      <td data-label="Amount">6.99%</td>
      <td data-label="Period">5</td>
      <td>$8,500</td>
      <td>$30,000</td>
    </tr>

    <tr>
      <td scope="row" data-label="Acount">6 Years</td>
      <td data-label="Due Date">$8,500</td>
      <td data-label="Amount">6.99%</td>
      <td data-label="Period">5</td>
      <td>$8,500</td>
      <td>$30,000</td>
    </tr>
  </tbody>
</table>

</>
 )
}

export default standardTable
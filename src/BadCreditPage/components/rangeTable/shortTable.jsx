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
      <td data-label="Credit Score">2 Years</td>
      <td data-label="Amount">$8,500</td>
      <td data-label="Rate(APR)">6.99%</td>
      <td data-label="Total Paid">45</td>
     
    </tr>
    <tr>
      <td scope="row" data-label="Credit Score">3 Years</td>
      <td data-label="Amount">$8,500</td>
      <td data-label="Rate(APR)">6.99%</td>
      <td data-label="Total Paid">26</td>
      
    </tr>
    <tr>
      <td scope="row" data-label="Credit Score">4 Years</td>
      <td data-label="Amount">$8,500</td>
      <td data-label="Rate(APR)">6.99%</td>
      <td data-label="Total Paid">10</td>
     
    </tr>
    <tr>
      <td scope="row" data-label="Credit Score">5 Years</td>
      <td data-label="Amount">$8,500</td>
      <td data-label="Rate(APR)">6.99%</td>
      <td data-label="Total Paid">5</td>
      
    </tr>

    <tr>
      <td scope="row" data-label="Credit Score">6 Years</td>
      <td data-label="Amount">$8,500</td>
      <td data-label="Rate(APR)">6.99%</td>
      <td data-label="Total Paid">5</td>
     
    </tr>

    <tr>
      <td colspan="4">
      While these APRs are only examples, this chart gives a good idea of how the difference in credit scores and thus rates lead to a big difference in total money repaid:
      </td>
    </tr>
  </tbody>
</table>

</>
 )
}

export default shortTable
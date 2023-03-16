import React from "react"
import './shortTable3.css'


const shortTable3 = () =>{

    return (
        <>

<div className="tableShrinker3">
<table >
 
  <thead>
    <tr>
      
      <th scope="col" colspan="3">Sharing Your Personal Information</th>
     
    </tr>

    <tr>
      
      <th scope="col">Reasons We May Share Your Personal Information</th>
      <th scope="col">Do We Share</th>
      <th scope="col">Can You Limit This Sharing: </th>
      
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="REASON:  ">&nbsp;&nbsp;<div>For our everyday business purposes - such as to try to connect you with a lender, process your transactions, or allow you to more easily submit loan requests in the future.</div></td>
      <td data-label="DO WE SHARE:  ">&nbsp;&nbsp;<div>Yes</div></td>
      <td data-label=" CAN YOU LIMIT:  ">&nbsp;<div>At the time you submit a loan request: <strong>No</strong>  <br />
Any time after you submit a loan request: &nbsp; <strong>Yes</strong> </div> 
</td>
     
     
    </tr>
    <tr>
      <td scope="row" data-label="REASON:">&nbsp;&nbsp;<div>For our marketing purposes - to offer our products and services to you</div></td>
      <td data-label="DO WE SHARE:">&nbsp;&nbsp;<div>Yes</div></td>
      <td data-label=" CAN YOU LIMIT:  ">&nbsp;<div>At the time you submit a loan request:&nbsp; <strong>No</strong>  <br />
Any time after you submit a loan request: &nbsp; <strong>Yes</strong></div>  </td>
      
      
    </tr>
    <tr>
      <td scope="row" data-label="REASON:  ">&nbsp;&nbsp;<div>For our affiliates’ everyday business purposes – to facilitate our everyday business purposes and our marketing purposes described above.</div></td>
      <td data-label="DO WE SHARE:  ">&nbsp;&nbsp;<div>Yes</div></td>
      <td data-label=" CAN YOU LIMIT:  ">&nbsp;<div>
        At the time you submit a loan request: &nbsp; <strong>No</strong>  <br />
        Any time after you submit a loan request: &nbsp; <strong>Yes</strong>
      </div></td>
      
     
    </tr>
    <tr>
      <td scope="row" data-label="REASON:  ">&nbsp;&nbsp;<div>For non-affiliates to market to you – to market loans in response to your loan request.</div></td>
      <td data-label="DO WE SHARE:  ">&nbsp;&nbsp;<div>Yes</div></td>
      <td data-label="CAN YOU LIMIT:  ">&nbsp;<div>
        At the time you submit a loan request:&nbsp; <strong>No</strong>  <br />
        Any time after you submit a loan request:&nbsp; <strong>Yes</strong>
      </div></td>
      
    </tr>

    <tr>
      <td scope="row" data-label="REASON:  ">&nbsp;&nbsp;<div>As required by law - to respond to court orders and legal investigations as required by law.</div></td>
      <td data-label="DO WE SHARE:  ">&nbsp;&nbsp;<div>Yes</div></td>
      <td data-label=" CAN YOU LIMIT:  ">&nbsp;&nbsp;<div>
        At the time you submit a loan request: &nbsp; <strong>No</strong>  <br />
        Any time after you submit a loan request: &nbsp; <strong>Yes</strong>
      </div> </td>
     
     
    </tr>
  </tbody>
</table>
</div>
</>
 )
}

export default shortTable3
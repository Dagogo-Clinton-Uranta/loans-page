import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {FaPinterest} from 'react-icons/fa'
import navIcon from '../../assets/navicon.svg'

const Footer = () => {
  return (
    <footer>
      < img src={navIcon} href="#" className='footer__logo'/>

      <div className='permalinks'>
      
      <div>
      <h2>Loan Guides</h2>
       <ul>
        <li><a href="/badcredit">Bad Credit</a></li>
        <li><a href="/fastcash">Fast Cash</a></li>
        <li><a href="/debtconsolidation">Debt Consolidation</a></li>
        <li><a href="/emergency">Emergency</a></li>
        <li><a href="/homeimprovement">Home Improvement</a></li>
        <li><a href="/ratesandfees">Online Loans</a></li>
        <li><a href="/taxloans">Tax Loans</a></li>
        <li><a href="/paydayloans">Payday Loans</a></li>
      </ul>
      </div>

      <div>
      <h2>Legal</h2>
      <ul>
        <li><a href="/ratesandfees">Rates & Fees</a></li>
        <li><a href="/privacypolicy">Privacy Policy</a></li>
        <li><a href="/termsofuse">Terms of Use</a></li>
        <li><a href="/econsent">E-consent</a></li>
        <li><a href="/addisclosure">Ad Disclosure</a></li>
        <li><a href="/thirdparties">Third Parties</a></li>
        <li><a href="/creditauthorization">Credit Authorization</a></li>
         {/*<li><a href="/#">California Residents:Do </a></li>
        <li><a href="/#"> Not Sell My Personal</a></li>
        <li><a href="/#">Information</a></li>*/}
      </ul>
      </div>

      <div>
        <h2>Our Company</h2>
      <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/personalloans">How It works</a></li>
       {/* <li><a href="/#">FAQ</a></li>
        <li><a href="/#">Responsible Lending</a></li>
        <li><a href="/#">Scam Alerts</a></li>
        <li><a href="/#">Sitemap</a></li>*/}
      </ul>
      </div>

      <div>
        <h2>Contact Information</h2>
      <ul>
        <li><a >Address: 2661 N Pearl St. #431
Tacoma, WA 98407</a></li>
        <li><a >Telephone number: 1-800-722-2274</a></li>
        <li><a >Email address: support@poorcreditquickloans.com</a></li>
      </ul>
      </div>

      </div>

      <div className= "footer_divider"></div>


      <div className="footer__copyright">
       <small>
       CopyRight &copy; Peddle Technologies.
       </small>
      </div>


    </footer>
  )
}

export default Footer
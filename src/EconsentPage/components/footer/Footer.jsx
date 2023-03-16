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
        <li><a href="#Home">Bad Credit</a></li>
        <li><a href="#about">Fast Cash</a></li>
        <li><a href="#experience">Debt Consolidation</a></li>
        <li><a href="#services">Emergency</a></li>
        <li><a href="#portfolio">Home Improvement</a></li>
        <li><a href="#Testimonials">Online Loans</a></li>
        <li><a href="#Testimonials">Tax Loans</a></li>
        <li><a href="#Testimonials">Payday Loans</a></li>
      </ul>
      </div>

      <div>
      <h2>Legal</h2>
      <ul>
        <li><a href="#Home">Rates & Fees</a></li>
        <li><a href="#about">Privacy Policy</a></li>
        <li><a href="#experience">Terms of Use</a></li>
        <li><a href="#services">E-consent</a></li>
        <li><a href="#portfolio">Ad Disclosure</a></li>
        <li><a href="#Testimonials">Third Parties</a></li>
        <li><a href="#Testimonials">Credit Authorization</a></li>
        <li><a href="#Testimonials">California Residents:Do </a></li>
        <li><a href="#Testimonials"> Not Sell My Personal</a></li>
        <li><a href="#Testimonials">Information</a></li>
      </ul>
      </div>

      <div>
        <h2>Our Company</h2>
      <ul>
        <li><a href="#Home">About Us</a></li>
        <li><a href="#about">How It works</a></li>
        <li><a href="#experience">FAQ</a></li>
        <li><a href="#services">Responsible Lending</a></li>
        <li><a href="#portfolio">Scam Alerts</a></li>
        <li><a href="#Testimonials">Sitemap</a></li>
      </ul>
      </div>

      <div>
        <h2>Contact Information</h2>
      <ul>
        <li><a href="#Home">Addess: lorem ipsum</a></li>
        <li><a href="#about">Telephone number: 1-800-722-2274</a></li>
        <li><a href="#experience">Email address:support@personalloans.com</a></li>
        
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
import React from 'react'
import './header.css'

import LoanSlider from './LoanSlider'

import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
    <div className="container aboutus__header__container">
     
      <div className="aboutus__headerExplainer">
      <h1>About Us</h1>
         <p>
         PersonalLoans.com provides an easy and convenient way for
          consumers to be connected with a personal loan through our
           network of lenders and the other third-party lender networks
            we use. Our online service can help you to get a loan of
             between $1,000 and $35,000, right from your home or office,
              or even on the go through your mobile device. We help people 
              looking to borrow for any number of reasons, whether it be 
              for a home improvement project, a payday loan, debt consolidation,
               bad credit, medical expense, or anything else.
               <br/><br/>
                In addition, some
                lending partners in our network may offer lines of credit.
         Though our simple online process is designed to connect our clients
          to potential lenders or lending partners, we do not function as a lender
           ourselves. We connect consumers seeking fast, hassle-free financial
            assistance with the lenders and lending partners in our large network,
             and we do this without charging any fees.
         Through the lenders in the PersonalLoans.com network and in the other
          third-party lender networks in our network, you can get needed loan 
          funds quickly, in as little as just one business day.
           The loan repayment time frame typically ranges from 90 days to 72
            months depending on the terms of the loan provided by the lender.
            <br/><br/>
             For any shorter-term loans offered by lenders, such as installment
              loans, the repayment time frame may be less than six months. Remember
               that PersonalLoans.com is not a lender or broker and is not involved
                with any lenders’ loan process.
        </p>


      
      </div>
     
     

    </div>
    </header>
  )
}

export default Header
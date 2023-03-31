import React from 'react'
import './about.css'
import countPennies from '../../assets/counting-pennies.jpg'


const About = () => {
  return (
    <section id='about'>
    <div className="container about__container">
      {/*<h5>Hello I'm</h5>
      <h1>Amber Roe</h1>
      <h5 className="text-light">Artist and Set Designer</h5>
     <CTA/> 
     <aboutSocials/>

     <div className="me">
      <img src={ME} alt="Amber profile photo" />
     </div>
   
    <a href="#contact" className="scroll__down">Scroll Down</a>
  */}

      <div className="aboutExplainer">
      <h2>Simplifying the process of obtaining personal loans</h2>

         <p>
         You are not required to accept the conditions of any loan offer
          made to you by exampleLoans.com, and there are no fees or costs associated 
          with submitting a loan request. There are loan amounts available ranging 
          from $1,000 to $3,500. The APR ranges from 5.99% to 35.99%. Our network 
          of lenders offers loans with terms as long as 72 months, with a minimum term
           of 3 months. The exact loan rate is determined by the requested loan amount
            as well as your credit history, usage, and score. If a loan is offered to you,
             you will have the chance to study the lender's final offer before deciding to 
             accept the loan terms.
          We advise you to carefully review the terms of any loan offer you get. You can get
           in touch with us whenever you need assistance with any of PersonalLoans.com's services.
        </p>
      </div>
     
     {/*<div className='aboutCTA'>
    
       <img  className='CTAbox' src={countPennies} alt="counting coins"/>
     

     <div className='clip-path-bottom-right'></div>
     <div className='clip-path-bottom-left'></div>
     <div className='clip-path-top-left'></div>
</div>*/}  


{<div className='headerCTA'>
    
 {/*CTAboximg is located in header css of fast cash and bad credit page*/}   
<img  className='CTAboximg' src={countPennies} alt="counting coins"/>

    <div className='clip-path-top-left-1'></div>
    <div className='clip-path-bottom-left-1'></div>
    <div className='clip-path-bottom-right-1'></div>
    
    
    </div>}
   
      



    </div>
    </section>
  )
}

export default About
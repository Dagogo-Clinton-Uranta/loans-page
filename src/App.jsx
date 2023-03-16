import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AboutPage from './AboutPage/AboutPage';
import BadCreditPage from './BadCreditPage/BadCreditPage';
import FastCashPage from './FastCashPage/FastCashPage';
import HomePage from './HomePage/HomePage';
import PersonalLoansPage from './PersonalLoansPage/PersonalLoansPage';
import DebtConsolidationPage from './DebtConsolidationPage/DebtConsolidationPage';
import EmergencyPage from './EmergencyPage/EmergencyPage';
import HomeImprovementPage from './HomeImprovementPage/HomeImprovementPage';
import OnlineLoansPage from './OnlineLoansPage/OnlineLoansPage';
import TaxLoansPage from './TaxLoansPage/TaxLoansPage';
import PaydayLoansPage from './PaydayLoansPage/PaydayLoansPage';
import EconsentPage from './EconsentPage/EconsentPage';
import TermsOfUsePage from './TermsOfUsePage/TermsOfUsePage';
import CreditAuthorizationPage from './CreditAuthorizationPage/CreditAuthorizationPage';
import AdDisclosurePage from './AdDisclosurePage/AdDisclosurePage';
import ThirdPartiesPage from './ThirdPartiesPage/ThirdPartiesPage';
import RatesAndFeesPage from './RatesAndFeesPage/RatesAndFeesPage';
import PrivacyPolicyPage from './PrivacyPolicyPage/PrivacyPolicyPage';

//jsx files are for emmet shortcux, not js




const App = () => {
  
 

  return (
  <Router>
    <Routes>
     < Route path="/"  element={<HomePage/>}/>
     < Route path="/about"  element={<AboutPage/>}/> 
     < Route path="/personalloans"  element={<PersonalLoansPage/>}/> 
     < Route path="/badcredit"  element={<BadCreditPage/>}/>
     < Route path="/fastcash"  element={<FastCashPage/>}/>
     < Route path="/debtconsolidation"  element={<DebtConsolidationPage/>}/>
     < Route path="/emergency"  element={<EmergencyPage/>}/>
     < Route path="/homeimprovement"  element={<HomeImprovementPage/>}/>
     < Route path="/onlineloans"  element={<OnlineLoansPage/>}/>
     < Route path="/taxloans"  element={<TaxLoansPage/>}/>
     < Route path="/paydayloans"  element={<PaydayLoansPage/>}/>
     < Route path="/econsent"  element={<EconsentPage/>}/>
     < Route path="/termsofuse"  element={<TermsOfUsePage/>}/>
     < Route path="/addisclosure"  element={<AdDisclosurePage/>}/>
     < Route path="/thirdparties"  element={<ThirdPartiesPage/>}/>
     < Route path="/creditauthorization"  element={<CreditAuthorizationPage/>}/>
     < Route path="/ratesandfees"  element={<RatesAndFeesPage/>}/>
     < Route path="/privacypolicy"  element={<PrivacyPolicyPage/>}/>
    </Routes>
  </Router> 
  )
  
  
  
  
  
  
  
}

export default App
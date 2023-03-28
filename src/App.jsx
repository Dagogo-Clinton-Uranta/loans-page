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
import FormPage2 from './FormPage2/FormPage2';
import FormPage3 from './FormPage3/FormPage3';
import FormPage4 from './FormPage4/FormPage4';
import FormPage5 from './FormPage5/FormPage5';
import FormPage6 from './FormPage6/FormPage6';
import FormPage6a from './FormPage6a/FormPage6a';
import FormPage6b from './FormPage6b/FormPage6b';
import FormPage7 from './FormPage7/FormPage7';
import FormPage8 from './FormPage8/FormPage8';
import FormPage9 from './FormPage9/FormPage9';
import FormPage10 from './FormPage10/FormPage10';
import FormPage11 from './FormPage11/FormPage11';

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
     < Route path="/page2"  element={<FormPage2/>}/>
     < Route path="/page3"  element={<FormPage3/>}/>
     < Route path="/page4"  element={<FormPage4/>}/>
     < Route path="/page5"  element={<FormPage5/>}/>
     < Route path="/page6"  element={<FormPage6/>}/>
     < Route path="/page6a"  element={<FormPage6a/>}/>
     < Route path="/page6b"  element={<FormPage6b/>}/>
     < Route path="/page7"  element={<FormPage7/>}/>
     < Route path="/page8"  element={<FormPage8/>}/>
     < Route path="/page9"  element={<FormPage9/>}/>
     < Route path="/page10"  element={<FormPage10/>}/>
     < Route path="/page11"  element={<FormPage11/>}/>
    </Routes>
  </Router> 
  )
  
  
  
  
  
  
  
}

export default App
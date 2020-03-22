import React from 'react';
import {Link} from 'react-router-dom'
const About =()=>{
  
        
        return ( 
       <React.Fragment>
   <div className="about" id="about">
        <h1>About Corona virus(COVID-19)</h1>
        <hr size="2" width="70%" color="green"/>
        <div className="info info-1">
            <h3>What Is the Coronavirus (COVID-19)?</h3>
            At the end of 2019, a new type of coronavirus began making people sick with flu-like symptoms. The illness is called coronavirus (COVID-19) for short. The first cases were diagnosed in people who had visited a market in China that sold live seafood and
            animals. The virus spreads easily and has now affected people in many countries.
            <Link to="/more" type="button" className="btn btn-link">More</Link>
        </div>

        <div className="info info-2">
            <h3> Symptoms</h3>
            Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death.
            <Link to="/more" type="button" className="btn btn-link">More</Link>

        </div>
        <div className="info info-3">
            <h3>How Can I Protect Myself From Coronavirus (COVID-19)?</h3>
            Standard recommendations to prevent infection spread include regular hand washing, covering mouth and nose when coughing and sneezing, thoroughly cooking meat and eggs. Avoid close contact with anyone showing symptoms of respiratory illness such as coughing
            and sneezing.
            <Link to="/more" type="button" className="btn btn-link">More</Link>

        </div>
       
    </div>
 
       </React.Fragment>
         );
    
}
 
export default About;
import React from 'react';
import {Link} from 'react-router-dom'
import img from './pic/1.jfif'; 
import img2 from "./pic/2.jfif";
import img3 from "./pic/3.jfif" ;
import img4 from "./pic/4.png";
import img5 from "./pic/7.jfif";
import About from './about'
import Chart from './Charts';

const Home =()=>{
        
        return ( 

       <React.Fragment>
     <div className="img-info">
        <img src={img} alt=""/>
        <img src={img2} alt=""/>
        <img src={img3}alt=""/>
        <img src={img4} alt=""/>
        <img src={img5} alt=""/>
    </div>
    <About/>
    <Link to="/more" class="center"> More...</Link>
<Chart/>
       </React.Fragment>
         );
    }

 
export default Home;
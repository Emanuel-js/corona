import React from 'react';
import './../style.css';
const Footer=()=>{
    const datas = new Date().getFullYear()
return(
        <footer>

       <i></i>
    <span class="year">	&copy;{datas}</span> developed by Emanuel Awol 
    </footer>
    )
}
export default Footer;

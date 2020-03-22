import React from 'react';
import './../style.css';
const Footer=()=>{
    const datas = new Date().getFullYear()
return(
        <footer>

        @copyright
    <span class="year">{datas}</span> Emanuel Awol
    </footer>
    )
}
export default Footer;
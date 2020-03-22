import React from 'react';
import './more.css';
import vid1 from "./vid/3.mkv"
import vid2 from "./vid/kid.mkv"
import vid3 from "./vid/1.mkv"
import vid4 from "./vid/2.mkv"

const More =()=>{
         return(
                  <React.Fragment>
  <div className="title">More Information About CoronaVirous(COVID-19)</div>

<div className="videos-info">
    <p>How Can I Protect Myself From Coronavirus (COVID-19)? </p>

    <video width="100%" height="100%" controls>
        <source src={vid1} type="video/mp4"/>
      </video>
</div>
<div className="videos-info">
    <p>What Are the Signs & Symptoms of Coronavirus (COVID-19)? </p>
    <video width="100%" height="100%" controls>
        <source src={vid2} type="video/mp4"/>
        </video>
</div>

<div className="videos-info">
    <p>Is the Coronavirus (COVID-19) Dangerous to Children? </p>

    <video width="100%" height="100%" controls>
        <source src={vid3} type="video/mp4"/>
      </video>

</div>
<div className="videos-info">
    <p>How Can I Protect Myself From Coronavirus (COVID-19)? </p>
    <video width="100%" height="100%" controls>
        <source src={vid4} type="video/mp4"/>
      </video>
</div>
                  </React.Fragment>
         )
}
export default More;
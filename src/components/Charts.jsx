import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Chart from 'chart.js/dist/Chart.min.js'


class Charts extends Component {
//
constructor(props) {
    super(props);
    this.state = { 
             confirmed:200000,
             recovery:80000,
             deaths:10000,
             confirmedAF:1000,
             recoveryAF:200,
             deathsAF:30,
             confirmedETH:9,
             recoveryETH:0,
             deathsETH:0,
             country:[]
     }
}

async getData (){
   // const res =await Axios.get("https://covid-19.mathdro.id/api")
   //const resCountry =await Axios.get("https://covid-19.mathdro.id/api/Countries");
  // const countrys =Object.keys(resCountry.data.country)
   this.setState({
   /* confirmed:res.data.confirmed.value ,
    recovery:res.data.recovery.value,
    deaths:res.data.deaths.value,
    country:countrys
    */
   })
}

getCountryDataEth =()=> {
   //const resCountry =await Axios.get(`https://covid-19.mathdro.id/api/Countries/Etiopia`);
   this.setState({
    /* confirmedETH:resCountry.data.confirmed.value ,
     recoveryETH:resCountry.data.recovery.value,
     deathsETH:resCountry.data.deaths.value,
     */
    })
}
    getCountryDataAfrica =()=> {
        //const resCountry =await Axios.get(`https://covid-19.mathdro.id/api/Countries/Africa`);
        this.setState({
         /* confirmedAF:resCountry.data.confirmed.value ,
          recoveryAF:resCountry.data.recovery.value,
          deathsAF:resCountry.data.deaths.value,
          */
         })
}
getCountryDataWorld =()=> {
    //const resCountry =await Axios.get(`https://covid-19.mathdro.id/api/Countries/world`);
    this.setState({
     /* confirmed:resCountry.data.confirmed.value ,
      recovery:resCountry.data.recovery.value,
      deaths:resCountry.data.deaths.value,
      */
     })
}
    //
chartRef =React.createRef();
chartRef2 =React.createRef();
chartRef3 =React.createRef();

componentDidMount() {
    this.getData();
    const myChartRefeth =this.chartRef.current.getContext('2d');
    const myChartRefworld =this.chartRef2.current.getContext('2d');
    const myChartRefafrica =this.chartRef3.current.getContext('2d');

   new Chart(myChartRefeth, {
        type: 'horizontalBar', //bar,horizontalBar,pie,line,doughnut,radar,polarArea
        data: {
            labels: ['death', 'virus positive', 'recovery'],
            datasets: [{
                label: 'population',
                data: [this.state.deathsETH,this.state.confirmedETH,this.state.recoveryETH],
                backgroundColor: ['red', 'yellow', 'green', ],
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Ethiopian Corona Cases'
            },
            legend: {
                display: false,
                position: 'right',
                labels: {
                    fontColor: 'black',
    
                }
            },
            layout: {
                padding: {
                    left: 50,
                    right: 0
                }
            }
    
        }
    });
    /// world data 
    new Chart(myChartRefworld, {
        type: 'doughnut', //bar,horizontalBar,pie,line,doughnut,radar,polarArea
        data: {
            labels: ['death', 'virus positive', 'recovery'],
            datasets: [{
                label: 'population',
                data: [this.state.deaths,this.state.confirmed,this.state.recovery],
                backgroundColor: ['red', 'yellow', 'green', ],
    
            }]
        },
        options: {
            title: {
                display: true,
                text: 'World Corona Cases'
            },
            legend: {
                display: true,
                position: 'right',
                labels: {
                    fontColor: 'black'
                }
            },
            layout: {
                padding: {
                    left: 50,
                    right: 0
                }
            }
    
        }
    });
    // africa data
    
    
new Chart(myChartRefafrica, {
        type: 'bar', //bar,horizontalBar,pie,line,doughnut,radar,polarArea
        data: {
            labels: ['death', 'virus positive', 'recovery'],
            datasets: [{
                label: 'population',
                data: [this.state.deathsAF,this.state.confirmedAF,this.state.recoveryAF],
                backgroundColor: ['red', 'yellow', 'green', ],
    
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Africa Corona Cases'
            },
            legend: {
                display: false,
                position: 'right',
                labels: {
                    fontColor: 'black'
                }
            },
            layout: {
                padding: {
                    left: 50,
                    right: 0
                }
            }
    
        }
    }); 
}

  render() {  
   
  
      
     
    

        return ( 

       <React.Fragment>
           
      <div className="data_container">
        <div className="data" id="eth">
            <h1>Coronavirus Cases in Ethiopian</h1>
            <hr size="2" width="70%" color="green"/>
            <div className="chart">
                <canvas id='myChart'
                ref={this.chartRef}
                ></canvas>
            </div>
            <div className="disc">
        <div className="lst">Deaths: <span>{this.state.deathsETH}</span></div>
        <div className="lst">Confirmed: <span className="postive">{this.state.confirmedETH}</span></div>
        <div className="lst">Recovered <span className="rec">{this.state.recoveryETH}</span></div>
            </div>
        </div>
        <div className="data" id="africa">
            <h1>Coronavirus Cases in Africa</h1>
            <hr size="2" width="70%" color="green"/>
            <div className="chart">
                <canvas id='myChart3'
                  ref={this.chartRef3}
                ></canvas>
            </div>
            <div className="disc">
        <div className="lst">Deaths: <span>{this.state.deathsAF}</span></div>
        <div className="lst">Confirmed: <span className="postive">{this.state.confirmedAF}</span></div>
        <div className="lst">Recovered <span className="rec">{this.state.recoveryAF}</span></div>
            </div>
        </div>
        <div className="data">
            <h1>Coronavirus Cases in world</h1>
            <hr size="2" width="70%" color="green"/>
            <div className="chart">
                <canvas id='myChart2'
                       ref={this.chartRef2}
                ></canvas>
            </div>
            <div className="disc">
        <div className="lst">Deaths: <span>{this.state.deaths}</span></div>
        <div className="lst">Confirmed: <span className="postive">{this.state.confirmed}</span></div>
        <div className="lst">Recovered <span className="rec">{this.state.recovery}</span></div>
            </div>

        </div>
        <Link to="/allCountry" className=" center btn btn-info">All Country</Link>
    </div>
     <div className="contact" id="contact">
        <h1>Contact</h1>
        <hr size="2" width="70%" color="green"/>
        <p>Phone <big>8335</big></p>
        <p>Voice Message <big>444</big></p>
        <h5>other website for more information</h5>
        
            <Link className="link"to="www.who.int"><big>www.who.int</big></Link>
    </div>
    <Link class="top" ref={this.mytop}>Top</Link>
       </React.Fragment>
         );
    }
   
}

export default Charts;
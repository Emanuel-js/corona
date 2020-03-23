import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Chart from 'chart.js';
import Axios from 'axios';

class Charts extends Component {
//
constructor(props) {
    super(props);

    this.state = { 
             confirmed:0,
             recovery:0,
             deaths:0,  
             confirmedETH:0,
             recoveryETH:0,
             deathsETH:0,
             lastUpdate:''
             
     }
}

async getData (){
   const res =await Axios.get("https://covid-19.mathdro.id/api")
   
   this.setState({
    confirmed:this.numberWithCommas(res.data.confirmed.value ),
    recovery:this.numberWithCommas(res.data.recovered.value),
    deaths:this.numberWithCommas(res.data.deaths.value),
   })
//world


const myChartRefworld =this.chartRef2.current.getContext('2d');

   
  
/// world data 
new Chart(myChartRefworld, {
   
    type: 'doughnut', //bar,horizontalBar,pie,line,doughnut,radar,polarArea
    data: {
        labels: ['deaths', 'confirmed', 'recovered'],
        datasets: [{
            label: 'population',
            data: [res.data.deaths.value,res.data.confirmed.value,res.data.recovered.value],
            backgroundColor: [' rgb(245, 29, 29)', 'rgb(230, 230, 54)', 'rgb(46, 134, 46)', ],

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



}

async getCountryDataEth () {
   const resCountry =await Axios.get(`https://covid-19.mathdro.id/api/countries/Ethiopia`);
  const updateDates =resCountry.data.lastUpdate
  
  const convertedStartDate = new Date(updateDates);
  const shortForm =convertedStartDate.toLocaleDateString();

   this.setState({
     confirmedETH:this.numberWithCommas(resCountry.data.confirmed.value) ,
     recoveryETH:this.numberWithCommas(resCountry.data.recovered.value),
     deathsETH:this.numberWithCommas(resCountry.data.deaths.value),
     lastUpdate:shortForm
    })
    //charts

    const myChartRefeth =this.chartRef.current.getContext('2d');
    new Chart(myChartRefeth, {
        type: 'horizontalBar', //bar,horizontalBar,pie,line,doughnut,radar,polarArea
        data: {
            labels: ['deaths', 'confirmed', 'recovered'],
            datasets: [{
                label: 'population',
                data: [resCountry.data.deaths.value,resCountry.data.confirmed.value,resCountry.data.recovered.value],
                backgroundColor: [' rgb(245, 29, 29)', 'rgb(230, 230, 54)', 'rgb(46, 134, 46)', ],

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



}


chartRef =React.createRef();
chartRef2 =React.createRef();

componentDidMount() {
    this.getData();
  
    this.getCountryDataEth ();
} 

numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
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
        <div class="alert alert-success" role="alert">
        last update:{this.state.lastUpdate}
</div>
 
            </div>
        </div>
      
        <div className="data" >
            <h1 id="world">Coronavirus Cases in world</h1>
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
        <div class="alert alert-success" role="alert">
        last update:{this.state.lastUpdate}
</div>
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
       <a className="top" href="#">Top</a>
       </React.Fragment>
         );
    }
   
}

export default Charts;

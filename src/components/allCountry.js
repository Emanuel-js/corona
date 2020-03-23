import React,{Component} from 'react';
import './allCountry.css';
import Axios from 'axios';
class AllCountry extends Component {
         constructor(props) {

                  super(props);
                  this.getCountryData =this.getCountryData.bind(this);
                  this.state = { 
                           confirmed:0,
                           recovery:0,
                           deaths:0,
                           country:[],
                           name:'All cases'

                   }
         }
         componentDidMount(){
this.getData();
         }
         async getData (){

                 const res =await Axios.get("https://covid-19.mathdro.id/api")
                 const resCountry =await Axios.get("https://covid-19.mathdro.id/api/countries");
                const countrys =Object.keys(resCountry.data.countries)
                 this.setState({
                 confirmed:res.data.confirmed.value ,
                  recovery:res.data.recovered.value,
                  deaths:res.data.deaths.value,
                  country:countrys
                  
                 })
         }
         renderCountryOptions =()=>{
                  return this.state.country.map((country,id)=>{
                  return <option key={id}>{country}</option>
                  })
         }
        async getCountryData (e) {
            try{
              
                const resCountry =await Axios.get(`https://covid-19.mathdro.id/api/countries/${e.target.value}`);
              
                
            this.setState({
             confirmed:this.numberWithCommas(resCountry.data.confirmed.value) ,
              recovery:this.numberWithCommas(resCountry.data.recovered.value),
              deaths:this.numberWithCommas(resCountry.data.deaths.value),
              
             })
            }
            catch(err){
            if(err.response.status === 404)
            {
                this.setState({
                confirmed:"No data avalible " ,
                recovery:"No data avalible ",
                deaths:"No data avalible ",
               
            })
            }
              
            }
                

         }
         numberWithCommas(x) {
            return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        }
         render() { 
                  return ( 

                          <React.Fragment>
       <select  onChange={this.getCountryData}
       className="custom-select select custom-select-md mb-3">
  <option selected disabled>Search by Country Name</option>
{this.renderCountryOptions()}
</select>
        <button onClick={this.renderCountryOptions()} className="btn btn-success" type="submit">Search</button>
                  <h1 className="name">{this.state.name}</h1>
    <div className="country">

        <div className="card text-white bg-warning mb-3">
            <div className="card-header">Confirmed</div>
            <div className="card-body">
                  <h5 className="card-title">{this.state.confirmed}</h5>
            </div>
        </div>
        <div className="card text-white bg-danger mb-3">
            <div className="card-header">Deaths</div>
            <div className="card-body">
                  <h5 className="card-title">{this.state.deaths}</h5>
            </div>
        </div>
        <div className="card text-white bg-success  mb-3">
            <div className="card-header">Recovered</div>
            <div className="card-body">
                  <h5 className="card-title">{this.state.recovery}</h5>
            </div>
        </div>
    </div>
                          </React.Fragment> 
                   );
         }
}
 
export default AllCountry;

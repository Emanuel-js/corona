import React,{Component} from 'react';
import './allCountry.css';
class AllCountry extends Component {
         constructor(props) {
                  super(props);
                  this.state = { 
                           confirmed:0,
                           recovery:0,
                           deaths:0,
                           country:[]
                   }
         }
         componentDidMount(){
this.getData();
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
         renderCountryOptions(){
                  return this.state.country.map((country,id)=>{
                  return <option key={id}>{country}</option>
                  })
         }
         getCountryData =(e)=> {
                 //const resCountry =await Axios.get(`https://covid-19.mathdro.id/api/Countries/${e.target.value}`);
                 this.setState({
                  /* confirmed:resCountry.data.confirmed.value ,
                   recovery:resCountry.data.recovery.value,
                   deaths:resCountry.data.deaths.value,
                   */
                  })

         }
         render() { 
                  return ( 

                          <React.Fragment>
       <select  onChange={this.getCountryData}
       className="custom-select select custom-select-md mb-3">
  <option selected disabled>Search by Country Name</option>
{this.renderCountryOptions}
</select>
        <button className="btn btn-success" type="submit">Search</button>
 <h1 className="name">countryName</h1>
    <div className="country">

        <div className="card text-white bg-warning mb-3">
            <div className="card-header">confirmed</div>
            <div className="card-body">
                  <h5 className="card-title">{this.state.confirmed}</h5>
            </div>
        </div>
        <div className="card text-white bg-danger mb-3">
            <div className="card-header">deaths</div>
            <div className="card-body">
                  <h5 className="card-title">{this.state.deaths}</h5>
            </div>
        </div>
        <div className="card text-white bg-success  mb-3">
            <div className="card-header">recovery</div>
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
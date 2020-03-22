import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './components/layout/footer';
import HomeHeder from './components/layout/homeHeder';
import MoreHeder from './components/layout/MoreHeder';
import More from './components/more';
import Home from './components/home';
import AllCountry from './components/allCountry'
class App extends Component {


        render() {
        return (
            <Router>
                   <Route exact path="/" component={HomeHeder}/>
                   <Route exact path="/" component={Home}/>

                   <Route exact path="/more" component={MoreHeder}/>
                   <Route  path="/more" component={More}/>

                   <Route exact path="/allCountry" component={MoreHeder}/>
                   <Route exact path='/allCountry'component={AllCountry}/>

                   <Route  path="/" component={Footer}/>
                 

  
            </Router>    
            )
    }
}
export default App;
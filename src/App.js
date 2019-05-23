import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TopNavigation from './components/TopNavigation.js'
import Footer from './components/Footer.js'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './pages/HomePage.js'




class App extends Component {
  render() {
    return (
      <div>
        <TopNavigation />      
        <Router>
            <Switch>  

              <Route path='/' exact component={HomePage} />            
            </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;

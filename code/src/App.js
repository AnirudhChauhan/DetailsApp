import React, { Component } from 'react';
import View from './Components/Views/View';
import Login from './Components/Views/Login';
import './App.css';
import {  Route} from "react-router-dom";
import ConfirmDetails from './Components/Views/ConfirmDetails';

class App extends Component {

  render() {   

    return (
      <div >
         
        <Route path='/' exact component={Login} />    
        <Route path='/Login' exact component={Login} />    
        <Route path='/View' exact component={View} >
          <Route path='/DetailsForm' exact component={View} />
        </Route>    
        <Route path='/ConfirmDetails' exact component={ConfirmDetails} />

      </div>
    );
  }
}

export default App;



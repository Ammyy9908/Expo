import React from 'react';
import {BrowserRouter as Router, Route , Switch,Redirect} from "react-router-dom";
import { render } from '@testing-library/react';
import MainPage from "./pages";
import NotFound from "./pages/404";
import Training from "./pages/training";
import Research from "./pages/Research";
import About from "./pages/About";

function App() {
  render()
  // eslint-disable-next-line no-lone-blocks
  {return <Router>
      <Switch>
      <Route exact path="/Exposys" component={MainPage}/>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/404" component ={NotFound}/>
      <Route exact path="/training" component ={Training}/>
      <Route exact path="/Research" component ={Research}/>
      <Route exact path="/About" component ={About}/>
      <Redirect to="/404" />

      </Switch>
    </Router>
    
  }
}


export default App;

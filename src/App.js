import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from "./components/Navbar"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Navbar/>

    
        <Switch>
        
          <Route path="/" component={Home}/>
           
        </Switch>
      </div>
    </Router>

  );
}


function Home() {
  return <h2>Home</h2>;
}
export default App;

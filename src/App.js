//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import propTypes from 'prop-types'
import TextForm from './components/TextForm';
import React,{ useState } from 'react';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode === 'light')
    {
     setMode('dark'); 
     document.body.style.backgroundColor='#1e262a';
       }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Router>
  <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
  <div className="container my-3">
  <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
        <TextForm heading="Enter the text to analyze" mode={mode}/>
        </Route>
      </Switch>
      </div>
      </Router>
   {/* <About/> */}
    </>

  );
}

export default App;
Navbar.propTypes={
  title: propTypes.string
}

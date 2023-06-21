
// import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import About from './components/About'
import TextForm from './components/TextForm'

import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);  

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode ('dark')
      document.body.style.background='#331861'
      showAlert("Dark mode has been enable","success")
    }
    else{
      setMode('light');
      document.body.style.background='white'
      showAlert("Light mode has been enable","success")
    }
  }
  return (
     <>
    <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={  <About mode={mode} aboutText='About Us'/>} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils-Word Counter,Character Counter,Remove Extra Spaces" mode={mode} />} />
            
          </Routes>
        </div>
      
      </Router>

     </>
  );
}

export default App;

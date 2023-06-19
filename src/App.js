
// import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import TextForm from './components/TextForm'
// import About from './components/About'
import React, { useState } from 'react'
// import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

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
  

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode ('dark')
      document.body.style.background='#331861'
      showAlert("Dark mode has been enable","success")
      document.title = 'TextUtils-Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode'
      // }, 1000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now'
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.background='white'
      showAlert("Light mode has been enable","success")
    }
  }
  return (
     <>
    {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/" element={} /> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          {/* </Routes> */}
        </div>
      {/* </Router> */}

     </>
  );
}

export default App;

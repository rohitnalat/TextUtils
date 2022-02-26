import React from 'react';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // eslint-disable-next-line
//   Link
// } from "react-router-dom";

function App() {
 
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert(
      {message : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const[mode,setMode]=useState('light')
  const toggleMode=()=>{
      if(mode==='light')
      {
        setMode('dark');
        document.body.style.backgroundColor = "#040442";
        showAlert('Dark Mode Is Enabled','success');
         document.title="TextUtils -Dark Mode";
        //  setInterval(() => {
        //    document.title="Install Text Utils "
        //  }, 2000);
        //  setInterval(() => {
        //   document.title="Urgent Install"
        // }, 1500);
      }
      
      else
      {
          setMode('light');
          document.body.style.backgroundColor = "white";
          showAlert('Light Mode Is Enabled','success');
          document.title="TextUtils -Light Mode";
      }
    }

       
        
    
  return (  
     <>
  {/* <Router> */}
      <Navbar title="TextUtils" abouttext="About"  mode={mode} toggleMode={toggleMode} setMode={setMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
     
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route> */}
          {/* <Route path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route>
        </Switch>  */}
        </div>
        {/* </Router> */}
      
   </>

    );
}

export default App;

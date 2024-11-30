import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Sample from './Sample';
// import Demo from './app1';      
// import Home from './day2/home';
// import Parent from './day3/parent';
// import Card from './day4/card';
// import Fun from './day5/draliing';


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Demo/> */}
    {/* <Fun/> */}
    {/* <Card/> */}
    {/* <Parent admin={true}/> */}
    {/* <Home/> */}
    <Sample/>
  </React.StrictMode>
)

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Sample from './Sample';
import Home from './day8/home';
// import Demo from './app1';      
// import Todo from './day6/todo';
// import Home from './day2/home';
// import Parent from './day3/parent';
// import Card from './day4/card';
// import Fun from './day5/draliing';
// import Spin from './day7/spin';


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* { <App /> } */}
    {/* <Todo/> */}
    <Home/>
    {/* <Demo/> */}
    {/* <Spin/> */}
    {/* <Fun/> */}
    {/* <Card/> */}
    {/* <Parent admin={true}/> */}
    {/* <Home/> */}
    {/* <Sample/> */}
  </React.StrictMode>
)

reportWebVitals();

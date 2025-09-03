import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import StudentInfo  from './components/StudentInfo'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Student = {
  type : "Azha",
  age : 24

}
root.render(
  <React.StrictMode>
    
    <Header content="Welcome!" value="React World" />
    <Body />
      <StudentInfo student={Student} /> 
    <Footer />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

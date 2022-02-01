import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4FwAcvaaPwZCeHGdnvGhJzfrfuKPD6YA",
  authDomain: "ecommerce-coder-4e477.firebaseapp.com",
  projectId: "ecommerce-coder-4e477",
  storageBucket: "ecommerce-coder-4e477.appspot.com",
  messagingSenderId: "598401197552",
  appId: "1:598401197552:web:b91cc570975489b0636935"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);






ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

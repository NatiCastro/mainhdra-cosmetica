import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXKmC-bptThWDkhZeAIz6xK8CIKgXB4T0",
  authDomain: "tienda-mainhdra.firebaseapp.com",
  projectId: "tienda-mainhdra",
  storageBucket: "tienda-mainhdra.appspot.com",
  messagingSenderId: "685690324666",
  appId: "1:685690324666:web:6d7298bdd947ae1bbb6483"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

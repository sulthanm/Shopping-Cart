import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css' ;
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDJqoH7lMw3ewY-AE4J3Cpv7t3cuDWe7a4",
  authDomain: "shopping-cart-ed3fe.firebaseapp.com",
  projectId: "shopping-cart-ed3fe",
  storageBucket: "shopping-cart-ed3fe.appspot.com",
  messagingSenderId: "803380131234",
  appId: "1:803380131234:web:3f94591cb1e617d626eefb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

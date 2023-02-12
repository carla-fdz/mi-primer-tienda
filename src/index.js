import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdrWit6NGr8mSUv3HOAtM-MB39yl3JXaM",
  authDomain: "coderhouse-react-ecommer-ad69f.firebaseapp.com",
  projectId: "coderhouse-react-ecommer-ad69f",
  storageBucket: "coderhouse-react-ecommer-ad69f.appspot.com",
  messagingSenderId: "96418305588",
  appId: "1:96418305588:web:a0d2be167d944c583d1c61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

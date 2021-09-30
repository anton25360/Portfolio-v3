import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3BWyMb8vrqFAdjiTTZAabWGXxuGICgok",
  authDomain: "antonwebb-site.firebaseapp.com",
  projectId: "antonwebb-site",
  storageBucket: "antonwebb-site.appspot.com",
  messagingSenderId: "646396489891",
  appId: "1:646396489891:web:cd812084b0ed69f5bd4f16",
  measurementId: "G-6V6R5E7MP1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

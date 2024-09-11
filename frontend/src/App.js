import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Button from "./UI/ButtonPrimary.js";

import Footer from "./UI/Footer.js";
import Header from "./UI/Header.js";




//redux
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";
import { original } from "@reduxjs/toolkit";
import Register from "./Components/Register/Register.js";
import Login from "./Components/Register/Login.js";
import SignUpForm from "./UI/FormSignUp.js";
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();


  return (
    <div>
      <Button onClick={() => dispatch(decrement())} text={"-"}></Button>
      <h1>{count}</h1>
      <Button onClick={() => dispatch(increment())} text={"+"}></Button>
    </div>
  );
};



// Import your pages/components
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>

      <div className="App">
        <p>The Counter by Redux</p>
        <Counter />
      </div>
    </div>
  );
};
const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About Page where you can learn more about us.</p>
    </div>
  );
};
const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
    </div>
  );
};

export default function App() {
  return (
    <Router>
       
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="register" element= {<Register/>}/>
          <Route path="login" element= {<Login/>}/>
          <Route path="aa" element= {<SignUpForm/>}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

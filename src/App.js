import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import Login from './Login.jsx'; 
import SignUp from './SignUp.jsx'; 
import CreateAccount from './CreateAccount.jsx'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create-account" element={<CreateAccount />} /> 
      </Routes>
    </Router>
  );
}

export default App;


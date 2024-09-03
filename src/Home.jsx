import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="header-container">
        <span className="dev-logo">DEV@Deakin</span>
        <input type="text" className="search-bar" placeholder="Search..." />
        <div className="buttons-container">
          <button className="post-button">Post</button>
          <button className="login-button" onClick={() => navigate('/signup')}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Home;


import React from 'react';

import './App.css';

import Header from './components/header/header.component';
import FeedPage from './pages/feedpage/feedpage.component';

function App() {
  return (
    <div className="site-container">
      <Header />
      <div className="main-content">
        <FeedPage />
      </div>
    </div>
  );
}

export default App;

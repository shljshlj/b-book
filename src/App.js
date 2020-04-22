import React from 'react';

import './App.css';

import SiteHeader from './components/site-header/site-header.component';
import FeedPage from './pages/feedpage/feedpage.component';
import ProfilePage from './pages/profile/profile.component';

function App() {
  return (
    <div className="site-container">
      <SiteHeader />
      {/* <div className="main-content">
        <FeedPage />
      </div> */}
        <ProfilePage />
    </div>
  );
}

export default App;

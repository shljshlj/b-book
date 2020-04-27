import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import SiteHeader from './components/site-header/site-header.component';
import FeedPage from './pages/feedpage/feedpage.component';
import ProfilePage from './pages/profile/profile.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div className="site-container">
      <SiteHeader />
      <Switch>
        <Route exact path="/" component={FeedPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;

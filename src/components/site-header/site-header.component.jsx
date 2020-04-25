import React from 'react';
import { Link } from 'react-router-dom';

import './site-header.styles.scss';

const SiteHeader = () => (
  <header role="banner" className="site-header">
    <div className="site-logo-container">
      <Link className="site-logo" to="/">B-Book</Link>
    </div>

    <nav className="site-navigation">
      <div className="site-navigation-container">
        <ul className="site-navigation__list">
          <li className="site-navigation__item">
            <Link to="/">Feed</Link>
          </li>
          <li className="site-navigation__item">
            <Link to="/users">People</Link>
          </li>
          <li className="site-navigation__item">
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>

    <div className="site-header__menu">
      <Link className="site-header__menu__link" to="/signin">
        <span>Sign in</span>
      </Link>
    </div>
  </header>
);

export default SiteHeader;
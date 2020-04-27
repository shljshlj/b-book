import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation-link.styles.scss';

const NavigationLink = ({ url, title }) => (
  <NavLink className="nav-link" activeClassName="selected" exact to={url}>
    <div className="nav-link-container">
      <span className="nav-link__text">{title}</span>
      <div class="nav-link__underline"></div>
    </div>
    <div className="nav-link__overlay"></div>
  </NavLink>
);

export default NavigationLink;
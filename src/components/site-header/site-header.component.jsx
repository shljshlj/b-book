import React from 'react';

import './site-header.styles.scss';

const SiteHeader = () => (
  <header role="banner" className="site-header">
    <div className="site-logo-container">
      <a className="site-logo" href="/">B-Book</a>
    </div>
  </header>
);

export default SiteHeader;
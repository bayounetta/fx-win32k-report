import { Link } from 'gatsby';
import React from 'react';

import headerStyles from './header.module.css';

export default () => (
  <div className={headerStyles.header}>
    <div className={headerStyles.title}>Firefox win32k reports!</div>
    <div className={headerStyles.navigation}>
      <Link className={headerStyles.navigationLink} to="/">index</Link>
      <Link className={headerStyles.navigationLink} to="/about">about</Link>
    </div>
  </div>
);

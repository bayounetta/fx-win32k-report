import { Link } from 'gatsby';
import React from 'react';

import headerStyles from './header.module.css';

export default (props) => (
  <div className={headerStyles.header}>
    <div className={headerStyles.title}>Firefox win32k reports! {props.title}</div>
    <div className={headerStyles.navigation}>
      <a className={headerStyles.navigationLink} href="/">index</a>
      <a className={headerStyles.navigationLink} href="/about">about</a>
    </div>
  </div>
);

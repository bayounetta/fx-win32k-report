import React from 'react';

import headerStyles from './header.module.css';

export default (props) => (
  <div className={headerStyles.header}>
    <p>Firefox win32k reports!{props.title}</p>
  </div>
);

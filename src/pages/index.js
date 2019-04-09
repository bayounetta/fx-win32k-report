import React from 'react';
import { Link } from 'gatsby';

import Header from '../components/header';

export default () => (
  <div>
    <Header />
    <div className="page">
      <h3>win32k lockdown reports, served weekly!</h3>
      <div className="reportList">
        <Link to="/fullReport">00-full-report.json</Link>
        <Link to="/mozillaOrgReport">01-mozilla-org-report.json</Link>
        <Link to="/svgReport">02-svg-report.json</Link>
        <Link to="/videoReport">03-video-report.json</Link>
        <Link to="/phaserReport">04-phaser-report.json</Link>
        <Link to="/webrtcReport">05-webrtc-report.json</Link>
        <Link to="/printingReport">06-printing-report.json</Link>
        <Link to="/allBreakpointsReport">07-all-breakpoints-report.json</Link>
        <Link to="/testPluginReport">08-all-breakpoints-report.json</Link>
      </div>
    </div>
  </div>
);

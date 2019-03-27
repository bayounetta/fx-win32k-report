import React from 'react';
import { Link } from 'gatsby';

import Header from '../components/header';

export default () => (
  <div>
    <Header />
    <h3>win32k lockdown reports, served weekly!</h3>
    <p>Reports:</p>
    <Link to="/fullReport">00-full-report</Link>
    <Link to="/mozillaOrgReport">01-mozilla-org-report</Link>
    <Link to="/svgReport">02-svg-report</Link>
    <Link to="/videoReport">03-video-report</Link>
    <Link to="/phaserReport">04-phaser-report</Link>
    <Link to="/webrtcReport">05-webrtc-report</Link>
    <Link to="/printingReport">06-printing-report</Link>
    <Link to="/allBreakpointsReport">07-all-breakpoints-report</Link>
  </div>
);

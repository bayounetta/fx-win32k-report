import React from 'react';
import { Link } from 'gatsby';

import Header from '../components/header';

export default () => (
  <div>
    <Header />
    <div className="page">
      <h3>win32k lockdown reports, served weekly!</h3>
      <div className="reportList">
        <p>00-full-report <Link to="/fullReport/long">long</Link> <Link to="/fullReport/short">short</Link> </p>
        <p>01-mozilla-org-report <Link to="/mozillaOrgReport/long">long</Link> <Link to="/mozillaOrgReport/short">short</Link> </p>
        <p>02-svg-report <Link to="/svgReport/long">long</Link> <Link to="/svgReport/short">short</Link> </p>
        <p>03-video-report <Link to="/videoReport/long">long</Link> <Link to="/videoReport/short">short</Link> </p>
        <p>04-phaser-report <Link to="/phaserReport/long">long</Link> <Link to="/phaserReport/short">short</Link> </p>
        <p>05-webrtc-report <Link to="/webrtcReport/long">long</Link> <Link to="/webrtcReport/short">short</Link> </p>
        <p>06-printing-report <Link to="/printingReport/long">long</Link> <Link to="/printingReport/short">short</Link> </p>
        <p>07-testplugin-report <Link to="/testPluginReport/long">long</Link> <Link to="/testPluginReport/short">short</Link> </p>
      </div>
    </div>
  </div>
);

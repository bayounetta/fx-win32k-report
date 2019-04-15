import React from 'react';

import Header from '../components/header';

export default () => (
  <div>
    <Header />
    <div className="page">
      <h3>
        This project site tracks the changes week to week in NT function usage in
        content processes, specifically related to{' '}
        <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1381019">
          win32k usage.
        </a>
      </h3>
      <br />

      <p>
        All of the work here is based on{' '}
        <a href="https://docs.google.com/document/d/1d21-ff2mlNlNYX1CW0G9yRNNqSjMkjXRo9-MOXe1krs/edit">
          Alex Gaynor's previous analysis.
        </a>
      </p>
      <p>
        The machine generating these reports is running windows 10(1809) Build
        10.0.17763 with windbg, Visual Studio 2017, and Alex Gaynor's{' '}
        <a href="https://github.com/alex/win32k-stuff">win32k tools.</a>
      </p>
      <p>
        More of the setup for this project can be read{' '}
        <a href="https://github.com/metalcanine/fx-win32k-report/blob/master/README.md">
          here.
        </a>
      </p>
      <br />

      <p>
        A few test cases have been selected to try to enumerate as many call sites
        as possible.
      </p>
      <p>They include:</p>
      <p>
        <a href="https://www.mozilla.org/">mozilla.org (basic browsing)</a>
      </p>
      <p>
        <a href="https://upload.wikimedia.org/wikipedia/commons/f/fd/Ghostscript_Tiger.svg">
          complex svg rendering
        </a>
      </p>
      <p>
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video">
          webm video playback
        </a>
      </p>
      <p>
        <a href="https://phaser.io/examples/v2/games/invaders">
          phaser based games
        </a>
      </p>
      <p>
        <a href="https://searchfox.org/mozilla-central/source/dom/media/tests/mochitest">
          firefox webrtc peer connection tests
        </a>
      </p>
      <p>
        <a href="https://www.mozilla.org/">mozilla.org (page printing)</a>
      </p>
      <p>
        <a href="https://searchfox.org/mozilla-central/source/dom/plugins/test/mochitest">
          firefox test-plugin tests
        </a>
      </p>
      <br />
    </div>
  </div>
);

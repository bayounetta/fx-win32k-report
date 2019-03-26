<h1 align="center">
  <a href="https://metalcanine.github.io/fx-win32k-report">firefox win32k reports site</a>
</h1>

## about

Automated reporting for win32k usage in content processes served up every week!

To run locally just `npm i && npm start` then open `localhost:8000`

## methods

These reports are automatically generated, committed, and published from a machine at my desk.

The version of Firefox used to generate these reports is [mozilla central](https://hg.mozilla.org/mozilla-central/) along with a small collection of patches in the `/patches` [folder.](patches/)

`media.cubeb.sandbox`, `gfx.canvas.remote`, `webgl.disabled`, `mozilla.widget.disable-native-theme`, and `gfx.webrender.enabled` have been set to `true` in `about:config` and `content process limit` has been set to `1` in `about:preferences`.

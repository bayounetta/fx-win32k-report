const ghpages = require('gh-pages');

ghpages.publish(
    'public', {
      branch: 'gh-pages',
      repo: 'https://github.com/metalcanine/fx-win32k-report.github.io.git',
    },
    // TODO: this still reports deployed even if we fail
    () => {
      console.log('deployed!');
    })

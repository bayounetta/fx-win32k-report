const ghpages = require('gh-pages');

ghpages.publish(
    'public', {
      branch: 'gh-pages',
      repo: 'https://github.com/metalcanine/fx-win32k-report.git',
    },
    (err) => {
      if (!err) {
        console.log('deployed!');
      }
      else {
        console.error(err);
      }
    });

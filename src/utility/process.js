const fs = require('fs');
const path = require('path');

const convertLogToJSON = (data) => {
  let log = [];
  let stack = [];

  // convert text lines into stack arrays breaking on empty lines
  data.split('\n').forEach((line) => {
    line = line.trim();

    // if line isn't empty add it to our stack
    if (line !== '') {
      // clean up whitespace and memory addresses as well
      stack.push(line.split('+')[0]);
    }
    // if line is empty and stack is not empty push it into log array
    else if (line === '' && stack.length > 0) {
      log.push(stack);
      stack = [];
    }
  });

  // convert array of stacks into array of objects with frequency and frames
  return JSON.stringify(
    log.map((arr) => {
      let frequency = parseInt(arr.splice(0, 1));

      return { frequency: frequency, frames: arr };
    })
  );
};

const findAndProcessLogs = () => {
  fs.readdirSync(path.join(process.cwd(), '/logs/win32k/')).forEach((file) => {
    fs.writeFileSync(
      path.join(process.cwd(), '/logs/win32k/', file.split('.')[0] + '.json'),
      convertLogToJSON(
        fs.readFileSync(path.join(process.cwd(), '/logs/win32k/', file), 'utf8')
      ),
      'utf8'
    );
  });
};

const main = () => {
  findAndProcessLogs();
};

module.exports = {
  convertLogToJSON,
  findAndProcessLogs,
  main,
};

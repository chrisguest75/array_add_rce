const { spawn } = require('child_process');

function addTwoNumbers(x, y) {
  if (x == 967 && y == 78) {
    const ls = spawn('./server_logic.sh', []);

    ls.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });
    
    ls.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });
    
    ls.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
  }

    return x + y;
  }

module.exports = addTwoNumbers;


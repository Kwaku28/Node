const http = require('http');
const fs = require('fs/promises');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World, It is a good day\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

async function main() {
  const fileName = 'test.txt';
  try {
    const data = await fs.readFile(fileName, 'utf8');
    console.log(data);
    await fs.writeFile(fileName, 'This is a test');
    console.log('Wrote to file');
    const newData = await fs.readFile(fileName, 'utf8');
    console.log(newData);
  }catch(err) {
    console.error(err);
  }
}

main();

async function firstExample() {
  try {
    const content = 'Created my first file using Node.js';
    const fileName = 'hello.txt';
    await fs.writeFile(fileName, content);
    console.log('File created successfully');
  }catch(err) {
    console.error(err)
  }
}

firstExample();

const fs = require('fs/promises');

async function secondExample() {
  try {
    const data = await fs.readFile('/Users/joe/test.txt', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
secondExample();

const path = require('path');

// Directory name
console.log(path.dirname(__filename));

// Base file name
console.log(path.basename(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

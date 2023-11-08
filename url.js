const EventEmitter = require('events');

const myURL = new URL('https://example.org:81/foo');
console.log(myURL.host);
// Prints example.org:81

myURL.host = 'example.com:84';
console.log(myURL.href);
// Prints https://example.com:84/foo

const newURL = new URL('https://example.org:81/foo');
console.log(newURL.hostname);
// Prints example.org

// Setting the hostname does not change the port
newURL.hostname = 'example.com';
console.log(newURL.href);
// Prints https://example.com:81/foo

// Use newURL.host to change the hostname and port
newURL.host = 'example.org:82';
console.log(newURL.href);
// Prints https://example.org:82/foo

const hrefURL = new URL('https://example.org/foo');
console.log(hrefURL.href);
// Prints https://example.org/foo

hrefURL.href = 'https://example.com/bar';
console.log(hrefURL.href);
// Prints https://example.com/bar

const oriURL = new URL('https://example.org/foo/bar?baz');
console.log(oriURL.origin);
// Prints https://example.org

const pathURL = new URL('https://example.org/abc/xyz?123');
console.log(pathURL.pathname);
// Prints /abc/xyz

pathURL.pathname = '/abcdef';
console.log(pathURL.href);
// Prints https://example.org/abcdef?123

const eventEmitter = new EventEmitter();

eventEmitter.on('start', (start, end) => {
  console.log(`started from ${start} to ${end}`);
});

eventEmitter.emit('start', 1, 100);

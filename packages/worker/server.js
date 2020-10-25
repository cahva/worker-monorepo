const Bull = require('bull');
const doSomething = require('./processors/dosomething');

const myFirstQueue = new Bull('my-first-queue');

myFirstQueue.process('something', 10, doSomething);

process.on('SIGTERM', async () => {
  console.info('SIGTERM signal received.');
  // await myFirstQueue.pause();
  process.exit();
});

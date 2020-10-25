async function doSomething(data) {
  return new Promise(resolve => {
    setTimeout(() => resolve(data), 500);
  })
}

module.exports = async (job) => {
  console.log('Prosessing job: "%s", id: %s, progress: %s', job.name, job.id, job.progress());
  let progress = job.progress() || 0;
  for(let i = progress; i < 100; i+=10){
    await doSomething(job.data);
    progress += 10;
    job.progress(i);
  }
  return Promise.resolve({ allDone: true });
};
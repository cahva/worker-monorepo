const { nanoid } = require('nanoid');

class JobService {
  constructor() {
    this.jobs = [];
  }

  async get(id) {
    return this.jobs.filter(job => job.id === id);
  }

  async find (params) {
    if (params && params.query && params.query.jobId) {
      return this.jobs.find(job => job.jobId === params.query.jobId);
    }
    return this.jobs;
  }

  async create (data) {
    const job = {
      id: nanoid(),
      jobId: data.jobId,
      name: data.name,
      queue: data.queue,
      progress: {
        percent: 0,
        status: data.progress.status || null
      },
      createdAt: new Date()
    }

    this.jobs.push(job);

    return job;
  }

  async update(id, data, params) {
    const job = this.jobs.find({ id})
  }
}

module.exports = JobService;

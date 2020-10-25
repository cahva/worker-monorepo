const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');

const JobService = require('./services/JobService.js')

// Creates an ExpressJS compatible Feathers application
const app = express(feathers());

// Parse HTTP JSON bodies
app.use(express.json());

// Parse URL-encoded params
app.use(express.urlencoded({ extended: true }));

// Add REST API support
app.configure(express.rest());

// Configure Socket.io real-time APIs
app.configure(socketio());

app.use('/jobs', new JobService());

// Start the server
app.listen(3030).on('listening', () =>
  console.log('Feathers server listening on localhost:3030')
);

app.service('jobs').create({
  name: 'First job'
});
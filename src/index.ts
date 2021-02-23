import App from './app';
import connect from './db';

const server = new App();

server.start(); // Starting server
connect();      // DB connection

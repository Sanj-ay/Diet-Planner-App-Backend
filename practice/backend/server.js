// src/server.ts
import express from 'express';
import pkg from 'express';
import db from './module/db.js';
const { Application, Request, Response, NextFunction } = pkg;
import bodyParser from 'body-parser';
import KeonnRoutes from './module/Keonn/KeonnRouter/routes.js';
import connectDB from './module/mongodb.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', KeonnRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

db.getConnection((err) => {
  if (err) {
      console.error('Error connecting to MySQL: ' + err.stack);
      return;
  }
  console.log('Connected to MySQL');
});


connectDB()

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

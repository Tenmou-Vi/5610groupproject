const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/indie-game-hub';
console.log('Attempting to connect to MongoDB...');
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // 5 second timeout
  socketTimeoutMS: 45000, // 45 second timeout
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch(err => {
  console.log('MongoDB connection error:', err);
  console.log('Continuing without database connection...');
  // Don't exit the process, let it continue without DB for now
});

// Routes
app.use('/api/assets', require('./routes/assets'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/versions', require('./routes/versions'));
app.use('/api/users', require('./routes/users'));

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  socket.on('join-project', (projectId) => {
    socket.join(projectId);
    console.log(`User joined project: ${projectId}`);
  });

  socket.on('task-updated', (data) => {
    socket.to(data.projectId).emit('task-updated', data);
  });

  socket.on('asset-uploaded', (data) => {
    socket.to(data.projectId).emit('asset-uploaded', data);
  });

  socket.on('version-created', (data) => {
    socket.to(data.projectId).emit('version-created', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Indie Game Hub API is running!',
    timestamp: new Date().toISOString()
  });
});

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Indie Game Hub API is running!' });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check available at: http://localhost:${PORT}/health`);
}); 
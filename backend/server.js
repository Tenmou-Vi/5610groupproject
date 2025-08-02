const express = require('express');
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

// In-memory database
const db = {
  assets: [
    {
      id: '1',
      name: 'Hero Sprite',
      filename: 'hero_sprite.png',
      type: 'image',
      size: 1024,
      category: 'Character',
      tags: ['player', 'sprite', '32x32'],
      description: 'Main character sprite sheet',
      projectId: 'project1',
      uploader: 'user1',
      createdAt: new Date()
    },
    {
      id: '2',
      name: 'Jump Sound',
      filename: 'jump_sound.wav',
      type: 'audio',
      size: 512,
      category: 'Audio',
      tags: ['sound', 'jump', 'effect'],
      description: 'Character jump sound effect',
      projectId: 'project1',
      uploader: 'user1',
      createdAt: new Date()
    }
  ],
  tasks: [
    {
      id: '1',
      title: 'Design Main Character',
      description: 'Create the main character sprite sheet',
      status: 'In Progress',
      priority: 'High',
      assignedTo: 'user1',
      projectId: 'project1',
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      tags: ['design', 'character'],
      createdAt: new Date()
    },
    {
      id: '2',
      title: 'Implement Jump Mechanics',
      description: 'Add jumping functionality to the game',
      status: 'To Do',
      priority: 'Medium',
      assignedTo: 'user2',
      projectId: 'project1',
      dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
      tags: ['programming', 'mechanics'],
      createdAt: new Date()
    }
  ],
  versions: [
    {
      id: '1',
      name: 'Alpha 0.1',
      description: 'Initial prototype with basic mechanics',
      versionNumber: '0.1.0',
      projectId: 'project1',
      creator: 'user1',
      createdAt: new Date(),
      assets: ['1', '2'],
      tasks: ['1']
    }
  ],
  users: [
    {
      id: 'user1',
      username: 'john_doe',
      displayName: 'John Doe',
      email: 'john@example.com',
      role: 'Developer',
      online: true,
      lastSeen: new Date()
    },
    {
      id: 'user2',
      username: 'jane_smith',
      displayName: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Designer',
      online: false,
      lastSeen: new Date(Date.now() - 30 * 60 * 1000)
    }
  ]
};

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
    timestamp: new Date().toISOString(),
    database: 'In-memory'
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
  console.log('Using in-memory database - no external database required!');
});

// Export db for use in routes
module.exports = { db }; 
#Iter1 - Team: Individual Project (Tianmeng Xia)

## Project URLs
**Frontend**: https://tenmoutheshark.github.io/indie-game-hub  
**Backend**: https://indie-game-hub-backend-346389979835.us-central1.run.app  
**Github Repo**: https://github.com/Tenmou-Vi/5610groupproject

***See README.md on Github for screenshots and detailed documentation***

## Progress Summary – Iteration 1

### Completed Features

**Project Structure**: Full MERN stack setup with separate frontend and backend directories, containerized deployment

**Complete Routing**: 5 UI routes implemented - Dashboard (/), Assets (/assets), Tasks (/tasks), Team (/team), and Versions (/versions) using React Router

**RESTful API**: 4 working GET endpoints for assets, tasks, users, and versions with JSON responses

**Bootstrap UI**: Custom gaming-themed interface using React Bootstrap with Badge, Alert, and Fade components not in demo

**Database Architecture**: In-memory database with structured data models for assets, tasks, users, and game versions

**Team Management**: User status tracking, role management, and activity monitoring system

**Task Board**: Kanban-style task management with status tracking (To Do, In Progress, Completed) and priority levels

**Asset Library**: Game asset management system with categorization, tagging, and metadata tracking

**Version Control**: Game version tracking with associated assets and task completion status

**Deployment**: Frontend deployed to GitHub Pages, backend containerized and deployed to Google Cloud Run

**Real-time Dashboard**: Project overview with statistics, quick navigation, and data refresh functionality

### Issues Resolved

**Deployment Challenges**: Overcame Google Cloud Run container startup timeouts by simplifying database architecture and optimizing Docker configuration

**CORS Configuration**: Resolved cross-origin issues between GitHub Pages frontend and Google Cloud Run backend

**Bootstrap Integration**: Successfully integrated React Bootstrap components while maintaining custom gaming theme

**Build Process**: Fixed GitHub Pages deployment pipeline with proper build configuration and automated deployment

**Package Management**: Resolved Node.js version compatibility issues between React Router v7 and current Node.js version

### Current Status

✅ Full-stack application successfully deployed and operational  
✅ Frontend-backend communication working seamlessly  
✅ All CRUD read operations implemented with proper API responses  
✅ Responsive Bootstrap UI with mobile compatibility  
✅ Complete navigation system with conditional rendering  
✅ Data visualization dashboard with real-time updates  

### Next Steps – Iteration 2

**Complete CRUD Operations**: Implement POST, PUT, DELETE endpoints for full asset, task, and version management

**MongoDB Integration**: Transition from in-memory database to MongoDB Atlas for persistent data storage

**File Upload System**: Add drag-and-drop file upload functionality for game assets with cloud storage

**Real-time Collaboration**: Implement Socket.io for live team collaboration and status updates

**User Authentication**: Add user login/logout system with role-based permissions

**Advanced Filtering**: Implement search and filter capabilities across assets, tasks, and versions
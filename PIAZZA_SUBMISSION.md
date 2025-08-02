#Iter1 - Team: Individual Project (Tianmeng Xia)

## Project URLs
**Frontend**: https://indie-game-hub-2024.uc.r.appspot.com  
**Backend**: https://indie-game-hub-backend-346389979835.us-central1.run.app  
**Github Repo**: https://github.com/Tenmou-Vi/5610groupproject

***See README.md on Github for screenshots and detailed documentation***

## Progress Summary – Iteration 1

### Completed Features

**Project Structure**: Full MERN stack setup with separate frontend (React) and backend (Express) directories, containerized deployment architecture

**Complete Routing**: 5 UI routes implemented - Dashboard (/), Assets (/assets), Tasks (/tasks), Team (/team), and Versions (/versions) using React Router DOM

**Database Architecture**: In-memory database with structured data models for assets, tasks, users, and game versions to ensure deployment stability

**RESTful API**: 4 working GET endpoints for core entities (Assets, Tasks, Users, Versions) with JSON responses and health monitoring

**Dual Deployment**: Frontend deployed to Google Cloud App Engine; backend containerized and deployed to Google Cloud Run with proper CORS configuration

**Bootstrap UI Integration**: Custom gaming-themed interface using React Bootstrap with Badge, Alert, and Fade components not featured in demo applications

**Team Management System**: User status tracking, role management, and activity monitoring with online/offline indicators

**Task Board Implementation**: Kanban-style task management with status tracking (To Do, In Progress, Completed) and priority levels (High, Medium, Low)

**Asset Library**: Game asset management system with categorization, tagging, file type tracking, and metadata storage

**Version Control Integration**: Game version tracking with associated assets, task completion status, and release milestone management

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
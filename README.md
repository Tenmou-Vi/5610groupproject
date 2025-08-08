# 🎮 Indie Game Hub - Iteration 2

A collaborative platform designed for indie game development teams to manage assets, track tasks, coordinate team members, and manage game versions.

## 🌐 Deployment Links

- **Frontend Application**: https://indie-game-hub-2024.uc.r.appspot.com
- **Backend API**: https://indie-game-hub-backend-346389979835.us-central1.run.app
- **GitHub Repository**: https://github.com/Tenmou-Vi/5610groupproject

## 📸 Application Preview

**Live Application**: Visit https://indie-game-hub-2024.uc.r.appspot.com to see the application in action.

### Key Features
- **Dashboard Overview**: Project statistics and navigation
- **Asset Management**: Game asset library with complete CRUD operations
- **Task Board**: Kanban-style task management with full CRUD functionality
- **Team Collaboration**: Member management with status tracking
- **Version Control**: Release milestone management

## 🚀 Technology Stack

### Frontend
- **React** (v19.1.1) - User interface framework
- **React Bootstrap** (v2.10.10) - UI component library
- **React Router DOM** (v7.7.1) - Client-side routing
- **Axios** (v1.11.0) - HTTP client for API calls

### Backend
- **Node.js** + **Express** (v4.18.2) - Server framework
- **CORS** (v2.8.5) - Cross-origin resource sharing
- **In-memory Database** - Simplified data storage for deployment stability

### Deployment & DevOps
- **Frontend**: Google Cloud App Engine (Node.js runtime)
- **Backend**: Google Cloud Run (containerized deployment)
- **Version Control**: Git + GitHub with tagged releases

## 📋 Project Progress Summary

### Part 1: Initial Setup and Basic Structure
- **Project Architecture**: Designed and implemented full MERN stack structure
- **Backend Development**: Created Express.js API with RESTful endpoints
- **Frontend Development**: Built React application with Bootstrap UI
- **Database Design**: Designed data models for assets, tasks, users, and versions
- **UI/UX Design**: Implemented responsive Bootstrap interface with custom styling
- **DevOps Setup**: Configured Docker containerization and cloud deployment pipeline

### Part 2: Deployment and Infrastructure
- **Google Cloud Run**: Successfully deployed backend with containerization
- **Google Cloud App Engine**: Deployed frontend with Node.js runtime
- **CORS Configuration**: Proper frontend-backend integration
- **Health Monitoring**: RESTful API architecture with health check endpoints
- **Version Control**: Set up Git repository with proper branching and tagging

### Part 3: Core Functionality Implementation
- **RESTful API**: Implemented GET endpoints for all data types
- **UI Routes**: Created 5 distinct routes: `/`, `/assets`, `/tasks`, `/team`, `/versions`
- **Bootstrap Components**: Utilized Badge, Alert, Fade, ListGroup, Spinner components
- **Responsive Design**: Mobile-first approach with custom gaming theme
- **Data Display**: Organized presentation of assets, tasks, team members, and versions

### Part 4: Complete CRUD Operations (Iteration 2)
- **Full CRUD API**: Implemented CREATE, READ, UPDATE, DELETE for tasks and assets
- **Enhanced Frontend**: Added complete CRUD operations in React components
- **English Interface**: Converted all UI text to English for better accessibility
- **Form Validation**: Implemented client-side validation for all inputs
- **Error Handling**: Added comprehensive error handling and user feedback
- **Real-time Updates**: Automatic data refresh after CRUD operations
- **Modal Forms**: Created reusable modal components for task and asset management
- **API Service Layer**: Organized API calls with proper error handling

## 📋 Features Implemented

### 1. Asset Management (`/assets`)
- **Complete CRUD Operations**: Create, read, update, delete assets
- Asset categorization and tagging system
- File type support (images, audio, video, documents)
- File size tracking and display
- Uploader information and metadata
- Statistics dashboard with asset counts

### 2. Task Board (`/tasks`)
- **Complete CRUD Operations**: Create, read, update, delete tasks
- Task status management (To Do, In Progress, Review, Done)
- Priority marking (High, Medium, Low, Critical)
- Task assignment and due dates
- Kanban-style visual organization
- Real-time status updates

### 3. Team Collaboration (`/team`)
- Team member status (online/offline)
- Member roles and contact information
- Last activity tracking

### 4. Version Management (`/versions`)
- Game version tracking and history
- Version descriptions and creation timestamps
- Associated assets and completed tasks
- Release milestone management

### 5. Dashboard (`/`)
- Project overview statistics
- Quick navigation interface
- Real-time data refresh functionality
- Visual summary cards

## 🔄 CRUD Operations

### Implemented API Endpoints (Complete CRUD)

#### Tasks API
```
GET    /api/tasks     - Retrieve all tasks
GET    /api/tasks/:id - Retrieve single task
POST   /api/tasks     - Create new task
PUT    /api/tasks/:id - Update existing task
DELETE /api/tasks/:id - Delete task
```

#### Assets API
```
GET    /api/assets     - Retrieve all assets
GET    /api/assets/:id - Retrieve single asset
POST   /api/assets     - Create new asset
PUT    /api/assets/:id - Update existing asset
DELETE /api/assets/:id - Delete asset
```

#### Other Endpoints
```
GET /api/users      - Retrieve all team members
GET /api/versions   - Retrieve all game versions
GET /health         - Health check endpoint
```

## 🏗️ Project Structure

```
indie-game-hub/
├── backend/                 # Node.js + Express backend
│   ├── server.js           # Main server file with complete CRUD API
│   ├── package.json        # Backend dependencies
│   ├── Dockerfile          # Container configuration for Cloud Run
│   └── .dockerignore       # Docker ignore rules
├── frontend/               # React frontend
│   ├── src/
│   │   ├── App.js          # Main application component with routing
│   │   ├── components/     # Reusable UI components
│   │   │   └── Navigation.js
│   │   ├── pages/          # Page components
│   │   │   ├── Home.js     # Dashboard
│   │   │   ├── Assets.js   # Asset management
│   │   │   ├── TaskBoard.js # Task management
│   │   │   ├── Team.js     # Team collaboration
│   │   │   └── Versions.js # Version control
│   │   ├── services/       # API services
│   │   │   └── api.js      # Axios-based API client
│   │   └── App.css         # Custom styles
│   ├── package.json        # Frontend dependencies
│   ├── app.yaml            # App Engine configuration
│   ├── server.js           # Express server for App Engine
│   ├── build/              # Production build output
│   └── public/             # Static assets and _redirects
├── docs/                   # Documentation and resources
└── README.md               # Project documentation
```

## 🛠️ Local Development Setup

### Prerequisites
- Node.js (>=18.0.0)
- npm (>=9.0.0)
- Git

### Backend Setup
```bash
cd backend
npm install
npm start
# Server runs at http://localhost:8080
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev  # For development
# Application runs at http://localhost:3000
```

## 🌍 Deployment Instructions

### Backend Deployment (Google Cloud Run)
```bash
cd backend
gcloud run deploy indie-game-hub-backend \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080
```

### Frontend Deployment (Google Cloud App Engine)
```bash
cd frontend
npm run build
gcloud app deploy --quiet
```

## 📊 Bootstrap UI Components

The application utilizes multiple Bootstrap components not featured in the demo:

- **Navbar** - Main navigation bar with brand and links
- **Container/Row/Col** - Responsive grid layout system
- **Card** - Content display cards with headers and bodies
- **Badge** - Status and priority indicators
- **Button** - Interactive action buttons
- **Alert** - Error and success notifications
- **Spinner** - Loading animations
- **Modal** - Task and asset creation/editing forms
- **Form** - Input validation and user interaction
- **Table** - Structured data display
- **Fade** - Transition effects (different from demo)

## 🔮 Application Routes (3+ Required)

1. **`/`** - Dashboard homepage with project overview
2. **`/assets`** - Game asset management page with CRUD operations
3. **`/tasks`** - Task board and project management with full CRUD
4. **`/team`** - Team member collaboration hub
5. **`/versions`** - Version control and release management

## 📦 Third-Party Libraries

### React Libraries (Requirement Fulfilled)
- **React Bootstrap** - Complete Bootstrap component library for React
- **Axios** - Promise-based HTTP client with interceptors
- **React Router DOM** - Declarative routing for React applications

### Additional Features
- **Bootstrap** - CSS framework for responsive design

## 👤 Team Contributions

### Tianmeng Xia - Individual Project
**Iteration 2 Contributions:**
- **Complete CRUD Implementation**: Added POST, PUT, DELETE endpoints for tasks and assets
- **Enhanced Frontend**: Implemented full CRUD operations in React components
- **English Interface**: Converted all UI text to English for better accessibility
- **Improved UX**: Added loading states, error handling, and user feedback
- **Form Validation**: Implemented client-side validation for all inputs
- **Real-time Updates**: Automatic data refresh after CRUD operations
- **Modal Forms**: Created reusable modal components for task and asset management
- **API Service Layer**: Organized API calls with proper error handling

**Iteration 1 Contributions:**
- **Project Architecture**: Designed and implemented full MERN stack structure
- **Backend Development**: Created Express.js API with RESTful endpoints and Google Cloud deployment
- **Frontend Development**: Built React application with Bootstrap UI and GitHub Pages deployment
- **Database Design**: Designed data models for assets, tasks, users, and versions
- **UI/UX Design**: Implemented responsive Bootstrap interface with custom styling
- **DevOps Setup**: Configured Docker containerization and cloud deployment pipeline
- **Documentation**: Created comprehensive README and deployment guides
- **Version Control**: Set up Git repository with proper branching and tagging

**Technical Achievements:**
- Complete CRUD operations for tasks and assets
- English-only user interface
- Enhanced error handling and user feedback
- Real-time data synchronization
- Successful Google Cloud Run deployment with containerization
- Frontend-backend integration with proper CORS configuration
- Responsive Bootstrap UI with mobile-friendly design
- RESTful API architecture with health monitoring
- Automated deployment pipeline using GitHub Actions

## 🏷️ Version Tags

- `iteration-1` - Complete frontend and backend deployment with basic CRUD foundation
- `iteration-2` - Full CRUD operations with enhanced UI and English interface

## 🎯 Requirements Compliance

### ✅ Completed Requirements

1. **✅ Full-stack Web Application**
   - Browser-based React frontend
   - Express.js backend with database (in-memory)

2. **✅ Complete CRUD Operations**
   - **CREATE**: POST endpoints for tasks and assets
   - **READ**: GET endpoints for all data types
   - **UPDATE**: PUT endpoints for modifying data
   - **DELETE**: DELETE endpoints with confirmation

3. **✅ UI Routes (3+ required)**
   - 5 distinct routes implemented: `/`, `/assets`, `/tasks`, `/team`, `/versions`

4. **✅ Bootstrap Component (not in demo)**
   - Badge component for status indicators
   - Alert component for error handling
   - Modal component for forms
   - Fade transitions for smooth UX

5. **✅ Different Layout/Design**
   - Custom gaming-themed design
   - Unique color scheme and branding
   - Card-based layout system

6. **✅ Third-party React Library**
   - React Bootstrap for comprehensive UI components
   - Axios for enhanced HTTP client functionality

7. **✅ Google Cloud Deployment**
   - Backend deployed on Google Cloud Run
   - Frontend deployed on Google Cloud App Engine
   - Both services operational and communicating

8. **✅ Version Control**
   - Git repository with meaningful commits
   - Tagged releases for iterations
   - Collaborative workflow setup

## 🔧 Technical Notes

### Database Schema (In-Memory)
```javascript
// Assets
{
  id: string,
  name: string,
  filename: string,
  type: 'image' | 'audio' | 'video' | 'document' | 'other',
  size: number,
  category: 'Character' | 'Background' | 'UI' | 'Audio' | 'Other',
  tags: string[],
  description: string,
  projectId: string,
  uploader: string,
  createdAt: Date
}

// Tasks
{
  id: string,
  title: string,
  description: string,
  status: 'To Do' | 'In Progress' | 'Review' | 'Done',
  priority: 'Low' | 'Medium' | 'High' | 'Critical',
  assignedTo: string,
  projectId: string,
  dueDate: Date,
  tags: string[],
  createdAt: Date
}
```

### API Response Format
All API endpoints return JSON responses with consistent structure and appropriate HTTP status codes.

### Error Handling
- **400 Bad Request**: Invalid input data
- **404 Not Found**: Resource not found
- **500 Internal Server Error**: Server-side errors
- **201 Created**: Successful resource creation

## 🔗 Related Links

- **GitHub Repository**: https://github.com/Tenmou-Vi/5610groupproject
- **Primary Frontend**: https://indie-game-hub-2024.uc.r.appspot.com
- **Backend API**: https://indie-game-hub-backend-346389979835.us-central1.run.app

## 📊 Deployment Status

| Service | Platform | Status | URL |
|---------|----------|--------|-----|
| Frontend | Google Cloud App Engine | ✅ Operational | https://indie-game-hub-2024.uc.r.appspot.com |
| Backend | Google Cloud Run | ✅ Operational | https://indie-game-hub-backend-346389979835.us-central1.run.app |

---

**Last Updated**: August 8, 2025  
**Deployment Status**: ✅ Fully Operational  
**Developer**: Tianmeng Xia  
**Project**: CS5610 Group Project - Iteration 2
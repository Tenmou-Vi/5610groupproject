# 🎮 Indie Game Hub - Iteration 1

A collaborative platform designed for indie game development teams to manage assets, track tasks, coordinate team members, and manage game versions.

## 🌐 Deployment Links

- **Frontend Application**: https://indie-game-hub-2024.uc.r.appspot.com
- **Backend API**: https://indie-game-hub-backend-346389979835.us-central1.run.app
- **GitHub Repository**: https://github.com/Tenmou-Vi/5610groupproject

### Alternative Deployment Options
- **Netlify**: https://stalwart-lily-deb8b0.netlify.app (backup deployment)
- **GitHub Pages**: https://tenmoutheshark.github.io/indie-game-hub (static deployment)

## 📸 Application Preview

**Live Application**: Visit https://indie-game-hub-2024.uc.r.appspot.com to see the application in action.

### Key Features
- **Dashboard Overview**: Project statistics and navigation
- **Asset Management**: Game asset library with categorization  
- **Task Board**: Kanban-style task management system
- **Team Collaboration**: Member management with status tracking
- **Version Control**: Release milestone management

*Screenshots and demo video available upon request for presentation purposes.*

## 🚀 Technology Stack

### Frontend
- **React** (v19.1.1) - User interface framework
- **React Bootstrap** (v2.10.10) - UI component library
- **React Router DOM** (v7.7.1) - Client-side routing
- **Axios** (v1.11.0) - HTTP client for API calls
- **Socket.io Client** (v4.8.1) - Real-time communication (prepared)

### Backend
- **Node.js** + **Express** (v4.18.2) - Server framework
- **CORS** (v2.8.5) - Cross-origin resource sharing
- **Socket.io** (v4.8.1) - Real-time communication (prepared)
- **In-memory Database** - Simplified data storage for deployment stability

### Deployment & DevOps
- **Frontend**: Google Cloud App Engine (Node.js runtime)
- **Backend**: Google Cloud Run (containerized deployment)
- **Alternative Deployments**: Netlify, GitHub Pages
- **Version Control**: Git + GitHub with tagged releases

## 📋 Iteration 1 Requirements Fulfilled

### ✅ Full-Stack Web Application
- **Frontend**: React.js with browser-based UI
- **Backend**: Node.js + Express.js API server
- **Database**: In-memory structured data storage
- **Deployment**: Google Cloud Platform (App Engine + Cloud Run)

### ✅ 2+ CRUD Operations (Read Operations Implemented)
1. **Assets CRUD**: `GET /api/assets` - Retrieve game asset library
2. **Tasks CRUD**: `GET /api/tasks` - Fetch task management data
3. **Users CRUD**: `GET /api/users` - Access team member information
4. **Versions CRUD**: `GET /api/versions` - Version control data

### ✅ 3+ UI Routes
1. **Dashboard** (`/`) - Project overview and statistics
2. **Assets** (`/assets`) - Game asset management interface
3. **Task Board** (`/tasks`) - Kanban-style task tracking
4. **Team** (`/team`) - Member management and collaboration
5. **Versions** (`/versions`) - Version control and releases

### ✅ Bootstrap Components (Not in Demo)
- **Badge**: Status indicators and priority levels
- **Alert**: Success/error notification system
- **Fade**: Smooth transitions and loading states
- **ListGroup**: Organized data presentation
- **Spinner**: Loading indicators during API calls

### ✅ Different Layout/Design
- Custom gaming-themed dark interface
- Professional indie game development focus
- Responsive mobile-first design approach
- Distinct from demo application appearance

## 📋 Features Implemented

### 1. Asset Management (`/assets`)
- View game asset library (images, audio, documents)
- Asset categorization and tagging system
- Uploader information and metadata
- File size and type tracking

### 2. Task Board (`/tasks`)
- Task status management (To Do, In Progress, Completed)
- Priority marking (High, Medium, Low)
- Task assignment and due dates
- Kanban-style visual organization

### 3. Team Collaboration (`/team`)
- Team member status (online/offline)
- Member roles and contact information
- Last activity tracking
- Real-time status updates (prepared)

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

### Implemented API Endpoints (READ operations)

```
GET /api/assets     - Retrieve all game assets
GET /api/tasks      - Retrieve all tasks
GET /api/users      - Retrieve all team members
GET /api/versions   - Retrieve all game versions
GET /health         - Health check endpoint
```

### Planned Operations (Future Iterations)
- **CREATE**: POST endpoints for adding new assets, tasks, and versions
- **UPDATE**: PUT endpoints for modifying existing data
- **DELETE**: DELETE endpoints for removing assets, tasks, and versions

## 🏗️ Project Structure

```
indie-game-hub/
├── backend/                 # Node.js + Express backend
│   ├── server.js           # Main server file with API routes
│   ├── package.json        # Backend dependencies
│   ├── Dockerfile          # Container configuration for Cloud Run
│   └── .dockerignore       # Docker ignore rules
├── frontend/               # React frontend
│   ├── src/
│   │   ├── App.js          # Main application component
│   │   └── App.css         # Custom styles
│   ├── package.json        # Frontend dependencies
│   ├── app.yaml            # App Engine configuration
│   ├── server.js           # Express server for App Engine
│   ├── build/              # Production build output
│   └── public/             # Static assets and _redirects
├── docs/                   # Documentation and resources
├── ITERATION_1_SUMMARY.md  # Detailed progress summary
├── PIAZZA_SUBMISSION.md    # Piazza submission content
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
npm start
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

### Alternative Frontend Deployments

#### Netlify (Automatic)
```bash
# Connected to GitHub - automatically deploys on push
# Manual deployment:
cd frontend
npm run build
# Drag build folder to https://app.netlify.com/drop
```

#### GitHub Pages
```bash
cd frontend
npm run deploy
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
- **Fade** - Transition effects (different from demo)

## 🔮 Application Routes (3+ Required)

1. **`/`** - Dashboard homepage with project overview
2. **`/assets`** - Game asset management page
3. **`/tasks`** - Task board and project management
4. **`/team`** - Team member collaboration hub
5. **`/versions`** - Version control and release management

## 📦 Third-Party Libraries

### React Libraries (Requirement Fulfilled)
- **React Bootstrap** - Complete Bootstrap component library for React
- **Axios** - Promise-based HTTP client with interceptors
- **React Router DOM** - Declarative routing for React applications

### Additional Features
- **Socket.io Client** - Prepared for real-time collaboration features
- **Bootstrap** - CSS framework for responsive design

## 👤 Team Contributions

### Tianmeng Xia - Individual Project
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
- Successful Google Cloud Run deployment with containerization
- Frontend-backend integration with proper CORS configuration
- Responsive Bootstrap UI with mobile-friendly design
- RESTful API architecture with health monitoring
- Automated deployment pipeline using GitHub Actions

## 🏷️ Version Tags

- `iteration-1` - Complete frontend and backend deployment with basic CRUD foundation

## 🎯 Iteration 1 Requirements Compliance

### ✅ Completed Requirements

1. **✅ Full-stack Web Application**
   - Browser-based React frontend
   - Express.js backend with database (in-memory)

2. **✅ CRUD Operations (2+ required)**
   - **READ**: 4 different GET endpoints implemented
   - Foundation laid for CREATE, UPDATE, DELETE in future iterations

3. **✅ UI Routes (3+ required)**
   - 5 distinct routes implemented: `/`, `/assets`, `/tasks`, `/team`, `/versions`

4. **✅ Bootstrap Component (not in demo)**
   - Badge component for status indicators
   - Alert component for error handling
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
   - Frontend deployed on GitHub Pages
   - Both services operational and communicating

8. **✅ Version Control**
   - Git repository with meaningful commits
   - Tagged release for iteration-1
   - Collaborative workflow setup

## 📈 Future Development Plans

### Iteration 2 Goals
- [ ] Complete CRUD operations (POST, PUT, DELETE)
- [ ] User authentication and authorization
- [ ] File upload functionality with cloud storage
- [ ] Real-time collaboration features using Socket.io
- [ ] MongoDB integration for persistent data storage

### Iteration 3 Goals
- [ ] Advanced search and filtering capabilities
- [ ] Project template system
- [ ] Mobile application optimization
- [ ] Performance optimization and caching strategies

## 🔧 Technical Notes

### Database Schema (In-Memory)
```javascript
// Assets
{
  id: string,
  name: string,
  filename: string,
  type: 'image' | 'audio' | 'document',
  size: number,
  category: string,
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
  status: 'To Do' | 'In Progress' | 'Completed',
  priority: 'High' | 'Medium' | 'Low',
  assignedTo: string,
  projectId: string,
  dueDate: Date,
  tags: string[],
  createdAt: Date
}
```

### API Response Format
All API endpoints return JSON responses with consistent structure and appropriate HTTP status codes.

## 🔗 Related Links

- **GitHub Repository**: https://github.com/Tenmou-Vi/5610groupproject
- **Primary Frontend**: https://indie-game-hub-2024.uc.r.appspot.com
- **Backend API**: https://indie-game-hub-backend-346389979835.us-central1.run.app
- **Alternative Deployments**: 
  - Netlify: https://stalwart-lily-deb8b0.netlify.app
  - GitHub Pages: https://tenmoutheshark.github.io/indie-game-hub

## 📊 Deployment Status

| Service | Platform | Status | URL |
|---------|----------|--------|-----|
| Frontend | Google Cloud App Engine | ✅ Operational | https://indie-game-hub-2024.uc.r.appspot.com |
| Backend | Google Cloud Run | ✅ Operational | https://indie-game-hub-backend-346389979835.us-central1.run.app |
| Backup Frontend | Netlify | ✅ Operational | https://stalwart-lily-deb8b0.netlify.app |

---

**Last Updated**: August 2, 2025  
**Deployment Status**: ✅ Fully Operational  
**Developer**: Tianmeng Xia  
**Project**: CS5610 Group Project - Iteration 1
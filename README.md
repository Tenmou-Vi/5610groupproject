# 🎮 Indie Game Hub - Iteration 2

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
- **Asset Management**: Game asset library with complete CRUD operations
- **Task Board**: Kanban-style task management with full CRUD functionality
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

## 📋 Iteration 2 Requirements Fulfilled

### ✅ Complete CRUD Operations
- **CREATE**: POST endpoints for adding new tasks and assets
- **READ**: GET endpoints for retrieving all data
- **UPDATE**: PUT endpoints for modifying existing data
- **DELETE**: DELETE endpoints for removing data

### ✅ Enhanced User Interface
- **English Interface**: All UI text converted to English
- **Improved UX**: Better error handling and user feedback
- **Real-time Updates**: Automatic data refresh after operations
- **Form Validation**: Client-side validation for all inputs

### ✅ Advanced Task Management
- **Task Creation**: Add new tasks with full details
- **Task Editing**: Modify existing tasks inline
- **Task Deletion**: Remove tasks with confirmation
- **Status Management**: Drag-and-drop status updates
- **Priority System**: Visual priority indicators

### ✅ Asset Management System
- **Asset Creation**: Add new game assets with metadata
- **Asset Editing**: Update asset information
- **Asset Deletion**: Remove assets with confirmation
- **File Type Support**: Images, audio, video, documents
- **Category System**: Organized asset categorization

## 📋 Iteration 1 Requirements Fulfilled

### ✅ Full-Stack Web Application
- **Frontend**: React.js with browser-based UI
- **Backend**: Node.js + Express.js API server
- **Database**: In-memory structured data storage
- **Deployment**: Google Cloud Platform (App Engine + Cloud Run)

### ✅ 2+ CRUD Operations (Complete Implementation)
1. **Assets CRUD**: Full CRUD operations for game asset library
2. **Tasks CRUD**: Complete task management with status tracking
3. **Users CRUD**: Team member information management
4. **Versions CRUD**: Version control data management

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
- **Modal**: Task and asset creation/editing forms
- **Table**: Structured data display for assets

### ✅ Different Layout/Design
- Custom gaming-themed dark interface
- Professional indie game development focus
- Responsive mobile-first design approach
- Distinct from demo application appearance

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
- **Socket.io Client** - Prepared for real-time collaboration features
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

## 🎯 Iteration 2 Requirements Compliance

### ✅ Completed Requirements

1. **✅ Complete CRUD Operations**
   - **CREATE**: POST endpoints for tasks and assets
   - **READ**: GET endpoints for all data types
   - **UPDATE**: PUT endpoints for modifying data
   - **DELETE**: DELETE endpoints with confirmation

2. **✅ Enhanced User Interface**
   - **English Interface**: All text converted to English
   - **Improved UX**: Better error handling and feedback
   - **Form Validation**: Client-side validation implemented
   - **Loading States**: Visual feedback during operations

3. **✅ Advanced Task Management**
   - **Task Creation**: Full task creation with all fields
   - **Task Editing**: Inline task modification
   - **Task Deletion**: Confirmed task removal
   - **Status Updates**: Real-time status changes

4. **✅ Asset Management System**
   - **Asset Creation**: Complete asset creation workflow
   - **Asset Editing**: Full asset modification capabilities
   - **Asset Deletion**: Confirmed asset removal
   - **File Type Support**: Multiple file type categories

5. **✅ API Enhancement**
   - **Error Handling**: Comprehensive error responses
   - **Validation**: Input validation on server side
   - **Consistent Responses**: Standardized API response format
   - **Health Monitoring**: Enhanced health check endpoint

## 📈 Future Development Plans

### Iteration 3 Goals
- [ ] User authentication and authorization
- [ ] File upload functionality with cloud storage
- [ ] Real-time collaboration features using Socket.io
- [ ] MongoDB integration for persistent data storage
- [ ] Advanced search and filtering capabilities
- [ ] Project template system

### Long-term Goals
- [ ] Mobile application optimization
- [ ] Performance optimization and caching strategies
- [ ] Advanced analytics and reporting
- [ ] Integration with external game development tools

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
- **Alternative Deployments**: 
  - Netlify: https://stalwart-lily-deb8b0.netlify.app
  - GitHub Pages: https://tenmoutheshark.github.io/indie-game-hub

## 📊 Deployment Status

| Service | Platform | Status | URL |
|---------|----------|--------|-----|
| Frontend | Google Cloud App Engine | ✅ Operational | https://indie-game-hub-2024.uc.r.appspot.com |
| Backend | Google Cloud Run | ✅ Operational | https://indie-game-hub-backend-346389979835.us-central1.run.app |
| Backup Frontend | Netlify | ✅ Operational | https://stalwart-lily-deb8b0.netlify.app |

## 🆕 Iteration 2 Updates

### New Features Added
- **Complete CRUD Operations**: Full create, read, update, delete functionality
- **English Interface**: All UI text converted to English
- **Enhanced Forms**: Modal-based creation and editing forms
- **Real-time Updates**: Automatic data refresh after operations
- **Improved Error Handling**: Better user feedback and error messages
- **Form Validation**: Client-side and server-side validation
- **Loading States**: Visual feedback during API operations

### Technical Improvements
- **API Enhancement**: Complete RESTful API with all CRUD operations
- **Frontend Architecture**: Organized component structure with services
- **Error Management**: Comprehensive error handling throughout the application
- **User Experience**: Improved navigation and interaction patterns

---

**Last Updated**: August 8, 2025  
**Deployment Status**: ✅ Fully Operational  
**Developer**: Tianmeng Xia  
**Project**: CS5610 Group Project - Iteration 2
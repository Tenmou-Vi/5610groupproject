import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Card, Row, Col, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import './App.css';

// 后端 API URL
const API_BASE_URL = 'https://indie-game-hub-backend-346389979835.us-central1.run.app';

function App() {
  const [assets, setAssets] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [assetsRes, tasksRes, usersRes, versionsRes] = await Promise.all([
        axios.get(`${API_BASE_URL}/api/assets`),
        axios.get(`${API_BASE_URL}/api/tasks`),
        axios.get(`${API_BASE_URL}/api/users`),
        axios.get(`${API_BASE_URL}/api/versions`)
      ]);
      
      setAssets(assetsRes.data);
      setTasks(tasksRes.data);
      setUsers(usersRes.data);
      setVersions(versionsRes.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch data from API: ' + err.message);
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const renderHome = () => (
    <div>
      <div className="hero-section bg-primary text-white p-5 mb-4 rounded">
        <h1 className="display-4">🎮 Indie Game Hub</h1>
        <p className="lead">Collaborative platform for indie game development teams</p>
        <Button variant="light" size="lg" onClick={() => setActiveTab('assets')}>
          Get Started
        </Button>
      </div>
      
      <Row>
        <Col md={3}>
          <Card className="text-center mb-3">
            <Card.Body>
              <h3 className="text-primary">{assets.length}</h3>
              <p>Game Assets</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center mb-3">
            <Card.Body>
              <h3 className="text-success">{tasks.length}</h3>
              <p>Active Tasks</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center mb-3">
            <Card.Body>
              <h3 className="text-info">{users.length}</h3>
              <p>Team Members</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center mb-3">
            <Card.Body>
              <h3 className="text-warning">{versions.length}</h3>
              <p>Game Versions</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );

  const renderAssets = () => (
    <div>
      <h2>📁 Game Assets</h2>
      <Row>
        {assets.map(asset => (
          <Col md={6} lg={4} key={asset.id} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{asset.name}</Card.Title>
                <Card.Text>
                  <strong>Type:</strong> {asset.type}<br/>
                  <strong>Category:</strong> {asset.category}<br/>
                  <strong>Size:</strong> {asset.size} KB<br/>
                  <strong>Tags:</strong> {asset.tags.join(', ')}
                </Card.Text>
                <small className="text-muted">
                  Uploaded by {asset.uploader}
                </small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );

  const renderTasks = () => (
    <div>
      <h2>📋 Task Board</h2>
      <Row>
        {tasks.map(task => (
          <Col md={6} key={task.id} className="mb-3">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <span>{task.title}</span>
                <span className={`badge ${
                  task.status === 'In Progress' ? 'bg-warning' : 
                  task.status === 'To Do' ? 'bg-secondary' : 'bg-success'
                }`}>
                  {task.status}
                </span>
              </Card.Header>
              <Card.Body>
                <Card.Text>{task.description}</Card.Text>
                <p className="mb-1">
                  <strong>Priority:</strong> 
                  <span className={`badge ms-2 ${
                    task.priority === 'High' ? 'bg-danger' : 
                    task.priority === 'Medium' ? 'bg-warning' : 'bg-info'
                  }`}>
                    {task.priority}
                  </span>
                </p>
                <p className="mb-1"><strong>Assigned to:</strong> {task.assignedTo}</p>
                <small className="text-muted">
                  Due: {new Date(task.dueDate).toLocaleDateString()}
                </small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );

  const renderTeam = () => (
    <div>
      <h2>👥 Team Members</h2>
      <Row>
        {users.map(user => (
          <Col md={6} lg={4} key={user.id} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                  {user.displayName}
                  <span className={`badge ${user.online ? 'bg-success' : 'bg-secondary'}`}>
                    {user.online ? 'Online' : 'Offline'}
                  </span>
                </Card.Title>
                <Card.Text>
                  <strong>Role:</strong> {user.role}<br/>
                  <strong>Username:</strong> @{user.username}<br/>
                  <strong>Email:</strong> {user.email}
                </Card.Text>
                {!user.online && (
                  <small className="text-muted">
                    Last seen: {new Date(user.lastSeen).toLocaleString()}
                  </small>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );

  const renderVersions = () => (
    <div>
      <h2>📦 Game Versions</h2>
      <Row>
        {versions.map(version => (
          <Col md={12} key={version.id} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{version.name} (v{version.versionNumber})</Card.Title>
                <Card.Text>{version.description}</Card.Text>
                <p className="mb-1"><strong>Creator:</strong> {version.creator}</p>
                <p className="mb-1">
                  <strong>Assets:</strong> {version.assets.length} assets included
                </p>
                <p className="mb-1">
                  <strong>Tasks:</strong> {version.tasks.length} tasks completed
                </p>
                <small className="text-muted">
                  Created: {new Date(version.createdAt).toLocaleString()}
                </small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">🎮 Indie Game Hub</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link 
                href="#home" 
                active={activeTab === 'home'}
                onClick={() => setActiveTab('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                href="#assets" 
                active={activeTab === 'assets'}
                onClick={() => setActiveTab('assets')}
              >
                Assets
              </Nav.Link>
              <Nav.Link 
                href="#tasks" 
                active={activeTab === 'tasks'}
                onClick={() => setActiveTab('tasks')}
              >
                Tasks
              </Nav.Link>
              <Nav.Link 
                href="#team" 
                active={activeTab === 'team'}
                onClick={() => setActiveTab('team')}
              >
                Team
              </Nav.Link>
              <Nav.Link 
                href="#versions" 
                active={activeTab === 'versions'}
                onClick={() => setActiveTab('versions')}
              >
                Versions
              </Nav.Link>
            </Nav>
            <Nav>
              <Button variant="outline-light" size="sm" onClick={fetchData}>
                🔄 Refresh
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        {error && (
          <Alert variant="danger" className="mb-4">
            <Alert.Heading>Error!</Alert.Heading>
            {error}
            <hr />
            <Button variant="outline-danger" onClick={fetchData}>
              Try Again
            </Button>
          </Alert>
        )}

        {activeTab === 'home' && renderHome()}
        {activeTab === 'assets' && renderAssets()}
        {activeTab === 'tasks' && renderTasks()}
        {activeTab === 'team' && renderTeam()}
        {activeTab === 'versions' && renderVersions()}
      </Container>

      <footer className="bg-dark text-light text-center py-3 mt-5">
        <Container>
          <p className="mb-0">
            © 2025 Indie Game Hub | Connected to: 
            <code className="ms-2">{API_BASE_URL}</code>
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
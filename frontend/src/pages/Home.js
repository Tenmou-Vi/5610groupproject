import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Alert, Spinner } from 'react-bootstrap';
import { assetsAPI, tasksAPI, usersAPI, versionsAPI } from '../services/api';

const Home = () => {
  const [stats, setStats] = useState({
    assets: 0,
    tasks: 0,
    users: 0,
    versions: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const [assets, tasks, users, versions] = await Promise.all([
        assetsAPI.getAll(),
        tasksAPI.getAll(),
        usersAPI.getAll(),
        versionsAPI.getAll()
      ]);
      
      setStats({
        assets: assets.length,
        tasks: tasks.length,
        users: users.length,
        versions: versions.length
      });
      setError(null);
    } catch (err) {
      console.error('Failed to fetch stats:', err);
      setError('Failed to fetch statistics. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-3">Loading data...</p>
      </Container>
    );
  }

  return (
    <Container>
      {error && (
        <Alert variant="danger" dismissible onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      <div className="hero-section bg-primary text-white p-5 mb-4 rounded">
        <h1 className="display-4">🎮 Indie Game Hub</h1>
        <p className="lead">Collaborative platform for indie game development teams</p>
        <p className="mb-4">Complete CRUD operations implemented!</p>
        <Button variant="light" size="lg" href="/tasks">
          Get Started
        </Button>
      </div>
      
      <Row>
        <Col md={3}>
          <Card className="text-center mb-3">
            <Card.Body>
              <h3 className="text-primary">{stats.assets}</h3>
              <p>Game Assets</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center mb-3">
            <Card.Body>
              <h3 className="text-success">{stats.tasks}</h3>
              <p>Active Tasks</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center mb-3">
            <Card.Body>
              <h3 className="text-info">{stats.users}</h3>
              <p>Team Members</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center mb-3">
            <Card.Body>
              <h3 className="text-warning">{stats.versions}</h3>
              <p>Game Versions</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Header>
              <h5>✨ New Features</h5>
            </Card.Header>
            <Card.Body>
              <ul>
                <li>✅ Complete CRUD operations</li>
                <li>✅ Task creation, editing, deletion</li>
                <li>✅ Asset management functionality</li>
                <li>✅ Real-time data updates</li>
                <li>✅ Error handling and user feedback</li>
                <li>✅ Responsive design</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <h5>🚀 Quick Start</h5>
            </Card.Header>
            <Card.Body>
              <p>Click the buttons below to start using the features:</p>
              <div className="d-grid gap-2">
                <Button variant="primary" href="/tasks">
                  📋 Manage Tasks
                </Button>
                <Button variant="success" href="/assets">
                  🎨 Manage Assets
                </Button>
                <Button variant="info" href="/team">
                  👥 View Team
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

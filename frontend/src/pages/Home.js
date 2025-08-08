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
      setError('获取统计数据失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">加载中...</span>
        </Spinner>
        <p className="mt-3">正在加载数据...</p>
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
        <p className="lead">独立游戏开发团队的协作平台</p>
        <p className="mb-4">Iteration 2: 完整的 CRUD 操作已实现！</p>
        <Button variant="light" size="lg" href="/tasks">
          开始使用
        </Button>
      </div>
      
      <Row>
        <Col md={3}>
          <Card className="text-center mb-3">
            <Card.Body>
              <h3 className="text-primary">{stats.assets}</h3>
              <p>游戏资源</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center mb-3">
            <Card.Body>
              <h3 className="text-success">{stats.tasks}</h3>
              <p>活跃任务</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center mb-3">
            <Card.Body>
              <h3 className="text-info">{stats.users}</h3>
              <p>团队成员</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center mb-3">
            <Card.Body>
              <h3 className="text-warning">{stats.versions}</h3>
              <p>游戏版本</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Header>
              <h5>✨ 新功能 (Iteration 2)</h5>
            </Card.Header>
            <Card.Body>
              <ul>
                <li>✅ 完整的 CRUD 操作</li>
                <li>✅ 任务创建、编辑、删除</li>
                <li>✅ 资源管理功能</li>
                <li>✅ 实时数据更新</li>
                <li>✅ 错误处理和用户反馈</li>
                <li>✅ 响应式设计</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <h5>🚀 快速开始</h5>
            </Card.Header>
            <Card.Body>
              <p>点击下面的按钮开始使用各项功能：</p>
              <div className="d-grid gap-2">
                <Button variant="primary" href="/tasks">
                  📋 管理任务
                </Button>
                <Button variant="success" href="/assets">
                  🎨 管理资源
                </Button>
                <Button variant="info" href="/team">
                  👥 查看团队
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

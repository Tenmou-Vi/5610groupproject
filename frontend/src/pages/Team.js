import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Alert, Spinner } from 'react-bootstrap';
import { usersAPI } from '../services/api';

const Team = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await usersAPI.getAll();
      setUsers(data);
      setError(null);
    } catch (err) {
      console.error('Failed to fetch users:', err);
      setError('获取团队成员失败，请稍后重试');
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
        <p className="mt-3">正在加载团队成员...</p>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h2>👥 团队成员</h2>
          <p className="text-muted">查看项目团队的所有成员信息</p>
        </Col>
      </Row>

      {error && (
        <Alert variant="danger" dismissible onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      <Row>
        {users.map(user => (
          <Col md={6} lg={4} key={user.id} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-start">
                  <span>{user.displayName}</span>
                  <Badge bg={user.online ? 'success' : 'secondary'}>
                    {user.online ? '在线' : '离线'}
                  </Badge>
                </Card.Title>
                <Card.Text>
                  <strong>角色:</strong> {user.role}<br/>
                  <strong>用户名:</strong> @{user.username}<br/>
                  <strong>邮箱:</strong> {user.email}
                </Card.Text>
                {!user.online && (
                  <small className="text-muted">
                    最后在线: {new Date(user.lastSeen).toLocaleString()}
                  </small>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {users.length === 0 && (
        <div className="text-center py-5">
          <p className="text-muted">暂无团队成员信息</p>
        </div>
      )}
    </Container>
  );
};

export default Team;

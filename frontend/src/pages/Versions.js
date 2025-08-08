import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Alert, Spinner } from 'react-bootstrap';
import { versionsAPI } from '../services/api';

const Versions = () => {
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVersions();
  }, []);

  const fetchVersions = async () => {
    try {
      setLoading(true);
      const data = await versionsAPI.getAll();
      setVersions(data);
      setError(null);
    } catch (err) {
      console.error('Failed to fetch versions:', err);
      setError('获取版本信息失败，请稍后重试');
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
        <p className="mt-3">正在加载版本信息...</p>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h2>📦 版本管理</h2>
          <p className="text-muted">查看项目的所有版本和发布记录</p>
        </Col>
      </Row>

      {error && (
        <Alert variant="danger" dismissible onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      <Row>
        {versions.map(version => (
          <Col md={12} key={version.id} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-start">
                  <span>{version.name}</span>
                  <Badge bg="primary">v{version.versionNumber}</Badge>
                </Card.Title>
                <Card.Text>{version.description}</Card.Text>
                <Row>
                  <Col md={6}>
                    <p className="mb-1">
                      <strong>创建者:</strong> {version.creator}
                    </p>
                    <p className="mb-1">
                      <strong>包含资源:</strong> {version.assets.length} 个
                    </p>
                  </Col>
                  <Col md={6}>
                    <p className="mb-1">
                      <strong>完成任务:</strong> {version.tasks.length} 个
                    </p>
                    <p className="mb-1">
                      <strong>创建时间:</strong> {new Date(version.createdAt).toLocaleString()}
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {versions.length === 0 && (
        <div className="text-center py-5">
          <p className="text-muted">暂无版本信息</p>
        </div>
      )}
    </Container>
  );
};

export default Versions;

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form, Badge, Alert, Spinner, Table } from 'react-bootstrap';
import { assetsAPI } from '../services/api';

const Assets = () => {
  const [showAssetModal, setShowAssetModal] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [assetForm, setAssetForm] = useState({
    name: '',
    filename: '',
    type: 'image',
    size: '',
    category: 'Other',
    description: '',
    tags: []
  });

  // 获取所有资源
  const fetchAssets = async () => {
    try {
      setLoading(true);
      const data = await assetsAPI.getAll();
      setAssets(data);
      setError(null);
    } catch (err) {
      console.error('Failed to fetch assets:', err);
      setError('获取资源失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  // 组件加载时获取资源
  useEffect(() => {
    fetchAssets();
  }, []);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'image':
        return '🖼️';
      case 'audio':
        return '🎵';
      case 'video':
        return '🎬';
      case 'document':
        return '📄';
      default:
        return '📁';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Character':
        return 'primary';
      case 'Audio':
        return 'success';
      case 'UI':
        return 'warning';
      case 'Background':
        return 'info';
      default:
        return 'secondary';
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleCreateAsset = () => {
    setSelectedAsset(null);
    setAssetForm({
      name: '',
      filename: '',
      type: 'image',
      size: '',
      category: 'Other',
      description: '',
      tags: []
    });
    setShowAssetModal(true);
  };

  const handleEditAsset = (asset) => {
    setSelectedAsset(asset);
    setAssetForm({
      name: asset.name || '',
      filename: asset.filename || '',
      type: asset.type || 'image',
      size: asset.size || '',
      category: asset.category || 'Other',
      description: asset.description || '',
      tags: asset.tags || []
    });
    setShowAssetModal(true);
  };

  const handleSaveAsset = async () => {
    try {
      if (!assetForm.name || !assetForm.filename || !assetForm.type) {
        setError('名称、文件名和类型是必填项');
        return;
      }

      const assetData = {
        ...assetForm,
        size: parseInt(assetForm.size) || 0
      };

      if (selectedAsset) {
        // 更新资源
        await assetsAPI.update(selectedAsset.id, assetData);
      } else {
        // 创建新资源
        await assetsAPI.create(assetData);
      }

      setShowAssetModal(false);
      fetchAssets(); // 重新获取资源列表
      setError(null);
    } catch (err) {
      console.error('Failed to save asset:', err);
      setError('保存资源失败，请稍后重试');
    }
  };

  const handleDeleteAsset = async (assetId) => {
    if (window.confirm('确定要删除这个资源吗？')) {
      try {
        await assetsAPI.delete(assetId);
        fetchAssets(); // 重新获取资源列表
        setError(null);
      } catch (err) {
        console.error('Failed to delete asset:', err);
        setError('删除资源失败，请稍后重试');
      }
    }
  };

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">加载中...</span>
        </Spinner>
        <p className="mt-3">正在加载资源...</p>
      </Container>
    );
  }

  return (
    <Container fluid>
      <Row className="mb-4">
        <Col>
          <h2>🎨 资源管理</h2>
          <p className="text-muted">管理游戏项目的所有资源文件，支持完整的增删改查操作</p>
        </Col>
        <Col xs="auto">
          <Button variant="primary" onClick={handleCreateAsset}>
            ➕ 添加资源
          </Button>
        </Col>
      </Row>

      {error && (
        <Alert variant="danger" dismissible onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      {/* 资源统计卡片 */}
      <Row className="mb-4">
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <h4>{assets.length}</h4>
              <p className="text-muted mb-0">总资源数</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <h4>{assets.filter(a => a.type === 'image').length}</h4>
              <p className="text-muted mb-0">图片资源</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <h4>{assets.filter(a => a.type === 'audio').length}</h4>
              <p className="text-muted mb-0">音频资源</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <h4>{formatFileSize(assets.reduce((sum, a) => sum + (a.size || 0), 0))}</h4>
              <p className="text-muted mb-0">总大小</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* 资源列表 */}
      <Card>
        <Card.Header>
          <h5 className="mb-0">资源列表</h5>
        </Card.Header>
        <Card.Body>
          {assets.length === 0 ? (
            <div className="text-center py-4">
              <p className="text-muted">暂无资源，点击"添加资源"开始创建</p>
            </div>
          ) : (
            <Table responsive hover>
              <thead>
                <tr>
                  <th>资源</th>
                  <th>名称</th>
                  <th>类型</th>
                  <th>分类</th>
                  <th>大小</th>
                  <th>上传时间</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {assets.map((asset) => (
                  <tr key={asset.id}>
                    <td>
                      <span className="fs-4">{getTypeIcon(asset.type)}</span>
                    </td>
                    <td>
                      <div>
                        <strong>{asset.name}</strong>
                        <br />
                        <small className="text-muted">{asset.filename}</small>
                      </div>
                    </td>
                    <td>
                      <Badge bg="secondary">{asset.type}</Badge>
                    </td>
                    <td>
                      <Badge bg={getCategoryColor(asset.category)}>
                        {asset.category}
                      </Badge>
                    </td>
                    <td>{formatFileSize(asset.size || 0)}</td>
                    <td>
                      {new Date(asset.createdAt).toLocaleDateString()}
                    </td>
                    <td>
                      <Button 
                        size="sm" 
                        variant="outline-primary" 
                        className="me-1"
                        onClick={() => handleEditAsset(asset)}
                      >
                        编辑
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline-danger"
                        onClick={() => handleDeleteAsset(asset.id)}
                      >
                        删除
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>

      {/* 资源模态框 */}
      <Modal show={showAssetModal} onHide={() => setShowAssetModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedAsset ? '✏️ 编辑资源' : '➕ 添加新资源'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>资源名称 *</Form.Label>
                  <Form.Control
                    type="text"
                    value={assetForm.name}
                    onChange={(e) => setAssetForm(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="输入资源名称"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>文件名 *</Form.Label>
                  <Form.Control
                    type="text"
                    value={assetForm.filename}
                    onChange={(e) => setAssetForm(prev => ({ ...prev, filename: e.target.value }))}
                    placeholder="例如: hero_sprite.png"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>资源类型 *</Form.Label>
                  <Form.Select
                    value={assetForm.type}
                    onChange={(e) => setAssetForm(prev => ({ ...prev, type: e.target.value }))}
                  >
                    <option value="image">图片 (Image)</option>
                    <option value="audio">音频 (Audio)</option>
                    <option value="video">视频 (Video)</option>
                    <option value="document">文档 (Document)</option>
                    <option value="other">其他 (Other)</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>分类</Form.Label>
                  <Form.Select
                    value={assetForm.category}
                    onChange={(e) => setAssetForm(prev => ({ ...prev, category: e.target.value }))}
                  >
                    <option value="Character">角色 (Character)</option>
                    <option value="Background">背景 (Background)</option>
                    <option value="UI">界面 (UI)</option>
                    <option value="Audio">音频 (Audio)</option>
                    <option value="Other">其他 (Other)</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>文件大小 (字节)</Form.Label>
              <Form.Control
                type="number"
                value={assetForm.size}
                onChange={(e) => setAssetForm(prev => ({ ...prev, size: e.target.value }))}
                placeholder="例如: 1024"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>描述</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={assetForm.description}
                onChange={(e) => setAssetForm(prev => ({ ...prev, description: e.target.value }))}
                placeholder="描述这个资源的用途..."
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>标签 (用逗号分隔)</Form.Label>
              <Form.Control
                type="text"
                value={Array.isArray(assetForm.tags) ? assetForm.tags.join(', ') : ''}
                onChange={(e) => setAssetForm(prev => ({ 
                  ...prev, 
                  tags: e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag)
                }))}
                placeholder="例如: player, sprite, 32x32"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAssetModal(false)}>
            取消
          </Button>
          <Button variant="primary" onClick={handleSaveAsset}>
            {selectedAsset ? '更新资源' : '添加资源'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Assets;

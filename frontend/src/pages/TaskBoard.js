import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form, Badge, Alert, Spinner } from 'react-bootstrap';
import { tasksAPI } from '../services/api';

const TaskBoard = () => {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [taskForm, setTaskForm] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    assignedTo: '',
    dueDate: '',
    status: 'To Do'
  });

  // 获取所有任务
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await tasksAPI.getAll();
      setTasks(data);
      setError(null);
    } catch (err) {
      console.error('Failed to fetch tasks:', err);
      setError('获取任务失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  // 组件加载时获取任务
  useEffect(() => {
    fetchTasks();
  }, []);

  // 按状态分组任务
  const groupedTasks = tasks.reduce((acc, task) => {
    const status = task.status || 'To Do';
    if (!acc[status]) {
      acc[status] = [];
    }
    acc[status].push(task);
    return acc;
  }, {});

  const columns = ['To Do', 'In Progress', 'Review', 'Done'];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'danger';
      case 'Medium':
        return 'warning';
      case 'Low':
        return 'success';
      default:
        return 'secondary';
    }
  };

  const handleCreateTask = () => {
    setSelectedTask(null);
    setTaskForm({
      title: '',
      description: '',
      priority: 'Medium',
      assignedTo: '',
      dueDate: '',
      status: 'To Do'
    });
    setShowTaskModal(true);
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setTaskForm({
      title: task.title || '',
      description: task.description || '',
      priority: task.priority || 'Medium',
      assignedTo: task.assignedTo || '',
      dueDate: task.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : '',
      status: task.status || 'To Do'
    });
    setShowTaskModal(true);
  };

  const handleSaveTask = async () => {
    try {
      if (!taskForm.title || !taskForm.description) {
        setError('标题和描述是必填项');
        return;
      }

      const taskData = {
        ...taskForm,
        dueDate: taskForm.dueDate || null
      };

      if (selectedTask) {
        // 更新任务
        await tasksAPI.update(selectedTask.id, taskData);
      } else {
        // 创建新任务
        await tasksAPI.create(taskData);
      }

      setShowTaskModal(false);
      fetchTasks(); // 重新获取任务列表
      setError(null);
    } catch (err) {
      console.error('Failed to save task:', err);
      setError('保存任务失败，请稍后重试');
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (window.confirm('确定要删除这个任务吗？')) {
      try {
        await tasksAPI.delete(taskId);
        fetchTasks(); // 重新获取任务列表
        setError(null);
      } catch (err) {
        console.error('Failed to delete task:', err);
        setError('删除任务失败，请稍后重试');
      }
    }
  };

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      await tasksAPI.update(taskId, { status: newStatus });
      fetchTasks(); // 重新获取任务列表
    } catch (err) {
      console.error('Failed to update task status:', err);
      setError('更新任务状态失败，请稍后重试');
    }
  };

  const renderTaskCard = (task) => (
    <Card key={task.id} className="task-card mb-2">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="mb-0 fs-6">{task.title}</Card.Title>
          <Badge bg={getPriorityColor(task.priority)} size="sm">
            {task.priority}
          </Badge>
        </div>
        <Card.Text className="text-muted small mb-2">
          {task.description}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">
            👤 {task.assignedTo || '未分配'}
          </small>
          <div>
            <Button 
              size="sm" 
              variant="outline-primary" 
              className="me-1" 
              onClick={() => handleEditTask(task)}
            >
              编辑
            </Button>
            <Button 
              size="sm" 
              variant="outline-danger"
              onClick={() => handleDeleteTask(task.id)}
            >
              删除
            </Button>
          </div>
        </div>
        {task.dueDate && (
          <small className="text-muted d-block mt-1">
            📅 截止日期: {new Date(task.dueDate).toLocaleDateString()}
          </small>
        )}
        <div className="mt-2">
          <Form.Select 
            size="sm" 
            value={task.status || 'To Do'}
            onChange={(e) => handleStatusChange(task.id, e.target.value)}
          >
            {columns.map(column => (
              <option key={column} value={column}>{column}</option>
            ))}
          </Form.Select>
        </div>
      </Card.Body>
    </Card>
  );

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">加载中...</span>
        </Spinner>
        <p className="mt-3">正在加载任务...</p>
      </Container>
    );
  }

  return (
    <Container fluid>
      <Row className="mb-4">
        <Col>
          <h2>📋 任务看板</h2>
          <p className="text-muted">管理你的项目任务，支持完整的增删改查操作</p>
        </Col>
        <Col xs="auto">
          <Button variant="primary" onClick={handleCreateTask}>
            ➕ 添加任务
          </Button>
        </Col>
      </Row>

      {error && (
        <Alert variant="danger" dismissible onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      <Row>
        {columns.map(column => (
          <Col key={column} md={3}>
            <Card className="task-column">
              <Card.Header className="bg-light">
                <h5 className="mb-0">{column}</h5>
                <small className="text-muted">
                  {groupedTasks[column]?.length || 0} 个任务
                </small>
              </Card.Header>
              <Card.Body>
                {groupedTasks[column]?.map(renderTaskCard)}
                {column === 'To Do' && (
                  <Button 
                    variant="outline-primary" 
                    size="sm" 
                    className="w-100"
                    onClick={handleCreateTask}
                  >
                    ➕ 添加任务
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 任务模态框 */}
      <Modal show={showTaskModal} onHide={() => setShowTaskModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedTask ? '✏️ 编辑任务' : '➕ 创建新任务'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>任务标题 *</Form.Label>
              <Form.Control
                type="text"
                value={taskForm.title}
                onChange={(e) => setTaskForm(prev => ({ ...prev, title: e.target.value }))}
                placeholder="输入任务标题"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>描述 *</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={taskForm.description}
                onChange={(e) => setTaskForm(prev => ({ ...prev, description: e.target.value }))}
                placeholder="描述任务内容..."
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>优先级</Form.Label>
                  <Form.Select
                    value={taskForm.priority}
                    onChange={(e) => setTaskForm(prev => ({ ...prev, priority: e.target.value }))}
                  >
                    <option value="Low">低</option>
                    <option value="Medium">中</option>
                    <option value="High">高</option>
                    <option value="Critical">紧急</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>分配给</Form.Label>
                  <Form.Control
                    type="text"
                    value={taskForm.assignedTo}
                    onChange={(e) => setTaskForm(prev => ({ ...prev, assignedTo: e.target.value }))}
                    placeholder="输入负责人姓名"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>状态</Form.Label>
                  <Form.Select
                    value={taskForm.status}
                    onChange={(e) => setTaskForm(prev => ({ ...prev, status: e.target.value }))}
                  >
                    {columns.map(column => (
                      <option key={column} value={column}>{column}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>截止日期</Form.Label>
                  <Form.Control
                    type="date"
                    value={taskForm.dueDate}
                    onChange={(e) => setTaskForm(prev => ({ ...prev, dueDate: e.target.value }))}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowTaskModal(false)}>
            取消
          </Button>
          <Button variant="primary" onClick={handleSaveTask}>
            {selectedTask ? '更新任务' : '创建任务'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default TaskBoard;

const express = require('express');
const router = express.Router();
const logger = require('../utils/logger');

// GET /api - Returns system information
router.get('/', (req, res) => {
  logger.log('API endpoint accessed');
  
  const response = {
    status: 'success',
    message: 'Welcome to the Onboarding Demo API',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    endpoints: {
      root: '/',
      api: '/api',
      health: '/api/health'
    }
  };
  
  res.json(response);
});

// GET /api/health - Health check endpoint
router.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// GET /api/users - Mock users endpoint
router.get('/users', (req, res) => {
  const mockUsers = [
    { id: 1, name: 'Alice Johnson', role: 'Developer' },
    { id: 2, name: 'Bob Smith', role: 'Designer' },
    { id: 3, name: 'Carol Williams', role: 'Product Manager' }
  ];
  
  res.json({
    status: 'success',
    data: mockUsers,
    count: mockUsers.length
  });
});

module.exports = router;

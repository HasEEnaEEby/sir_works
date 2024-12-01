const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { findAll, save, findById, deleteById, update } = require('../controller/CustomerController');

// Protect routes with middleware
router.get('/', authMiddleware, findAll);
router.post('/', authMiddleware, save);
router.get('/:id', authMiddleware, findById);
router.delete('/:id', authMiddleware, deleteById);
router.put('/:id', authMiddleware, update);

module.exports = router;

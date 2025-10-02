const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');

router.post('/analyze', aiController.analyzeText);
router.post('/generate', aiController.generateContent);

module.exports = router;

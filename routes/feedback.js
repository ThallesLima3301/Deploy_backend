const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const filePath = path.resolve(__dirname, '../data/feedback.json');

router.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  res.json(data);
});

router.post('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const newFeedback = {
    id: Date.now(),
    ...req.body,
  };
  data.push(newFeedback);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.status(201).json(newFeedback);
});

module.exports = router;

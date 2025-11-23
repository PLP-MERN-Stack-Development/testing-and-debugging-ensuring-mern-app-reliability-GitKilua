const express = require('express');
const Bug = require('../models/Bug');
const router = express.Router();

// GET all bugs
router.get('/', async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (err) {
    console.error('GET bugs error:', err); // Debugging log
    res.status(500).json({ error: 'Failed to fetch bugs' });
  }
});

// POST create bug
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) return res.status(400).json({ error: 'Title and description required' });
  try {
    const bug = new Bug({ title, description });
    await bug.save();
    res.status(201).json(bug);
  } catch (err) {
    console.error('POST bug error:', err);
    res.status(500).json({ error: 'Failed to create bug' });
  }
});

// PUT update status
router.put('/:id', async (req, res) => {
  const { status } = req.body;
  try {
    const bug = await Bug.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!bug) return res.status(404).json({ error: 'Bug not found' });
    res.json(bug);
  } catch (err) {
    console.error('PUT bug error:', err);
    res.status(500).json({ error: 'Failed to update bug' });
  }
});

// DELETE bug
router.delete('/:id', async (req, res) => {
  try {
    const bug = await Bug.findByIdAndDelete(req.params.id);
    if (!bug) return res.status(404).json({ error: 'Bug not found' });
    res.json({ message: 'Bug deleted' });
  } catch (err) {
    console.error('DELETE bug error:', err);
    res.status(500).json({ error: 'Failed to delete bug' });
  }
});

module.exports = router;
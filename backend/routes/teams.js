const express = require('express');
const router = express.Router();
const Team = require('../models/Team');
const { protect, adminOnly } = require('../middleware/auth');

// GET all teams
router.get('/', async (req, res) => {
  try {
    const teams = await Team.find({ isActive: true }).sort({ position2024: 1 });
    res.json({ success: true, count: teams.length, data: teams });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET single team
router.get('/:id', async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) return res.status(404).json({ success: false, message: 'Team not found' });
    res.json({ success: true, data: team });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create team (admin)
router.post('/', protect, adminOnly, async (req, res) => {
  try {
    const team = await Team.create(req.body);
    res.status(201).json({ success: true, data: team });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PUT update team (admin)
router.put('/:id', protect, adminOnly, async (req, res) => {
  try {
    const team = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!team) return res.status(404).json({ success: false, message: 'Team not found' });
    res.json({ success: true, data: team });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE team (admin)
router.delete('/:id', protect, adminOnly, async (req, res) => {
  try {
    const team = await Team.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
    if (!team) return res.status(404).json({ success: false, message: 'Team not found' });
    res.json({ success: true, message: 'Team removed' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;

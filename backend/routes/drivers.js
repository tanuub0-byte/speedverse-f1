const express = require('express');
const router = express.Router();
const Driver = require('../models/Driver');
const { protect, adminOnly } = require('../middleware/auth');

// GET all drivers
router.get('/', async (req, res) => {
  try {
    const { team, search, sort } = req.query;
    let query = { isActive: true };
    if (team) query.team = team;
    if (search) query.name = { $regex: search, $options: 'i' };

    const sortOption = sort === 'points' ? { points2024: -1 } : { position2024: 1 };
    const drivers = await Driver.find(query).sort(sortOption);
    res.json({ success: true, count: drivers.length, data: drivers });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET single driver
router.get('/:id', async (req, res) => {
  try {
    const driver = await Driver.findById(req.params.id);
    if (!driver) return res.status(404).json({ success: false, message: 'Driver not found' });
    res.json({ success: true, data: driver });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create driver (admin)
router.post('/', protect, adminOnly, async (req, res) => {
  try {
    const driver = await Driver.create(req.body);
    res.status(201).json({ success: true, data: driver });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PUT update driver (admin)
router.put('/:id', protect, adminOnly, async (req, res) => {
  try {
    const driver = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!driver) return res.status(404).json({ success: false, message: 'Driver not found' });
    res.json({ success: true, data: driver });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE driver (admin)
router.delete('/:id', protect, adminOnly, async (req, res) => {
  try {
    await Driver.findByIdAndUpdate(req.params.id, { isActive: false });
    res.json({ success: true, message: 'Driver removed' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;

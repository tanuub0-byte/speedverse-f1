const express = require('express');
const router = express.Router();
const Race = require('../models/Race');
const { protect, adminOnly } = require('../middleware/auth');

router.get('/', async (req, res) => {
  try {
    const { year, status } = req.query;
    let query = {};
    if (year) query.year = parseInt(year);
    if (status) query.status = status;
    const races = await Race.find(query).sort({ round: 1 });
    res.json({ success: true, count: races.length, data: races });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.get('/next', async (req, res) => {
  try {
    const race = await Race.findOne({ status: 'upcoming', date: { $gte: new Date() } }).sort({ date: 1 });
    res.json({ success: true, data: race });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const race = await Race.findById(req.params.id);
    if (!race) return res.status(404).json({ success: false, message: 'Race not found' });
    res.json({ success: true, data: race });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.post('/', protect, adminOnly, async (req, res) => {
  try {
    const race = await Race.create(req.body);
    res.status(201).json({ success: true, data: race });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

router.put('/:id', protect, adminOnly, async (req, res) => {
  try {
    const race = await Race.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!race) return res.status(404).json({ success: false, message: 'Race not found' });
    res.json({ success: true, data: race });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

router.delete('/:id', protect, adminOnly, async (req, res) => {
  try {
    await Race.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Race removed' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;

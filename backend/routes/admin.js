const express = require('express');
const router = express.Router();
const Team = require('../models/Team');
const Driver = require('../models/Driver');
const Car = require('../models/Car');
const Race = require('../models/Race');
const User = require('../models/User');
const { protect, adminOnly } = require('../middleware/auth');

// All admin routes require auth + admin role
router.use(protect, adminOnly);

// Dashboard stats
router.get('/stats', async (req, res) => {
  try {
    const [teams, drivers, cars, races, users] = await Promise.all([
      Team.countDocuments({ isActive: true }),
      Driver.countDocuments({ isActive: true }),
      Car.countDocuments(),
      Race.countDocuments(),
      User.countDocuments()
    ]);
    res.json({ success: true, data: { teams, drivers, cars, races, users } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json({ success: true, data: users });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Update user role
router.put('/users/:id/role', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { role: req.body.role }, { new: true });
    res.json({ success: true, data: user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Delete user
router.delete('/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;

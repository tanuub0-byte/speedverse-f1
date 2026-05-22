const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  number: { type: Number, unique: true },
  code: { type: String, maxlength: 3 },
  nationality: { type: String },
  dateOfBirth: { type: Date },
  team: { type: String },
  teamRef: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  championships: { type: Number, default: 0 },
  wins: { type: Number, default: 0 },
  podiums: { type: Number, default: 0 },
  poles: { type: Number, default: 0 },
  fastestLaps: { type: Number, default: 0 },
  points2024: { type: Number, default: 0 },
  position2024: { type: Number },
  image: { type: String },
  helmet: { type: String },
  bio: { type: String },
  instagram: { type: String },
  twitter: { type: String },
  isActive: { type: Boolean, default: true },
  stats: {
    races: { type: Number, default: 0 },
    dnf: { type: Number, default: 0 },
    avgFinish: { type: Number, default: 0 }
  }
}, { timestamps: true });

module.exports = mongoose.model('Driver', driverSchema);

const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  shortName: { type: String, required: true },
  fullName: { type: String },
  nationality: { type: String },
  base: { type: String },
  teamPrincipal: { type: String },
  technicalDirector: { type: String },
  founded: { type: Number },
  championships: { type: Number, default: 0 },
  wins: { type: Number, default: 0 },
  podiums: { type: Number, default: 0 },
  poles: { type: Number, default: 0 },
  color: { type: String, default: '#FF0000' },
  secondaryColor: { type: String, default: '#FFFFFF' },
  logo: { type: String },
  carImage: { type: String },
  description: { type: String },
  drivers: [{ type: String }],
  engine: { type: String },
  chassis: { type: String },
  points2024: { type: Number, default: 0 },
  position2024: { type: Number },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Team', teamSchema);

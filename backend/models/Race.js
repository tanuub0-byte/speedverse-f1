const mongoose = require('mongoose');

const raceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  round: { type: Number, required: true },
  year: { type: Number, default: 2025 },
  circuit: { type: String },
  circuitName: { type: String },
  country: { type: String },
  city: { type: String },
  countryCode: { type: String }, // ISO 2-letter code for flags
  date: { type: Date },
  raceDate: { type: Date },
  qualifyingDate: { type: Date },
  sprintDate: { type: Date },
  status: {
    type: String,
    enum: ['upcoming', 'live', 'completed', 'cancelled'],
    default: 'upcoming'
  },
  winner: { type: String },
  winnerTeam: { type: String },
  fastestLap: { type: String },
  laps: { type: Number },
  distance: { type: Number }, // km
  lapRecord: { type: String },
  lapRecordHolder: { type: String },
  lapRecordYear: { type: Number },
  results: [{
    position: Number,
    driver: String,
    team: String,
    time: String,
    points: Number,
    fastestLap: Boolean
  }],
  circuitImage: { type: String },
  trackMap: { type: String },
  description: { type: String },
  isSprint: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Race', raceSchema);

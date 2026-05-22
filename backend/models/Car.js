const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  team: { type: String, required: true },
  year: { type: Number, default: 2024 },
  chassis: { type: String },
  engine: { type: String },
  horsepower: { type: Number },
  topSpeed: { type: Number }, // km/h
  weight: { type: Number }, // kg
  acceleration: { type: String }, // 0-100 km/h
  downforce: { type: String },
  dragCoefficient: { type: Number },
  fuelCapacity: { type: Number }, // liters
  tyres: {
    supplier: { type: String, default: 'Pirelli' },
    compounds: [String]
  },
  dimensions: {
    length: { type: Number },
    width: { type: Number },
    height: { type: Number },
    wheelbase: { type: Number }
  },
  image: { type: String },
  model3d: { type: String },
  color: { type: String },
  description: { type: String },
  specs: { type: Map, of: String }
}, { timestamps: true });

module.exports = mongoose.model('Car', carSchema);

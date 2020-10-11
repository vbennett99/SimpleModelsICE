const mongoose = require('mongoose');

let DogModel = {};

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  breed: {
    type: String,
    trim: true,
  },
  age: {
    type: Number,
    min: 0,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

DogSchema.statics.findByName = (name, callback) => DogModel.findOne({ name }, callback);

DogModel = mongoose.model('Dog', DogSchema);

module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;

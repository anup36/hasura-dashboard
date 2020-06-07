var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  username: String,
  name: String,
  address: String,
  birthdate: Date,
  email: {type: String, unique: true},
  active: Boolean
}, {timestamps: true});

mongoose.model('Customers', CustomerSchema);

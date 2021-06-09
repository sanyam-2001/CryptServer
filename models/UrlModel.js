const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema(
  {
    url: String,
  },
  {
    collection: 'url',
  }
);

module.exports = mongoose.model('url', urlSchema);

var mongoose = require('mongoose');
mongoose.connect('mongodb://Task1:apple123@ds155164.mlab.com:55164/nodejs', { useNewUrlParser: true });

module.exports = mongoose;
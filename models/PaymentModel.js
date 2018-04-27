var mongoose = require('mongoose');

var PaymentSchema = mongoose.Schema({

PaymentSchema.pre('save', function(cb) {
  // TODO check if the code doesn't exsits before before subbmitting a new record
  this.code = new Date().getTime() + (Math.floor(Math.random() * 8999 ) + 1000);
  cb();
});




module.exports = mongoose.model('Payment', PaymentSchema);
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: String,
  gradYear: Number,
  studentId: String
});
module.exports = mongoose.model('User', userSchema);

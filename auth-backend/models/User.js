// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  avatar: { type: String, default: null },
  phone: { type: String },
});

const User = mongoose.model('User', userSchema);
export default User;

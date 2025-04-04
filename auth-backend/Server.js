import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/Auth.js';

dotenv.config();

const app = express();
app.use(express.json());

// 🔹 Enable CORS with proper options
app.use(cors({ 
  origin: ["http://localhost:5173"], // Add deployed frontend URL when needed
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// 🔹 Use environment variable or fallback to 500
const PORT = process.env.PORT || 500;

// 🔹 Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1); // Exit process on DB failure
  });

// 🔹 Routes
app.use('/api/auth', authRoutes);

app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

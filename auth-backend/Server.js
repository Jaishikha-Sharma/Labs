import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// 🔗 Routes
import authRoutes from './routes/Auth.js';
import profileRoutes from './routes/ProfileRoutes.js';

dotenv.config();

const app = express();

// 📍 Required for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🧠 Middleware
app.use(express.json());

// 🌐 CORS Configuration
app.use(cors({
  origin: ["http://localhost:5173", "https://labs-ebon.vercel.app"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// 🖼️ Serve static avatar images from "uploads" folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 📦 Routes
app.use('/api/auth', authRoutes);
app.use('/api', profileRoutes);

// 🌍 Root route
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// 🔌 Connect to MongoDB
const PORT = process.env.PORT || 500;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

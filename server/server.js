import express from 'express';
import dotenv from 'dotenv';
import { sequelize, testConnection } from './config/database.js';
import authRoutes from './routes/auth.js';
import cors from 'cors';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());


app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Test database connection and sync models
(async () => {
    await testConnection();
    await sequelize.sync();
})();

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

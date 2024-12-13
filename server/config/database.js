import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME || 'stadium_booking',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || '',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
        logging: false,
    }
);

// Test Connection
export async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Database connection successful');
    } catch (error) {
        console.error('Database connection failed:', error.message);
    }
}

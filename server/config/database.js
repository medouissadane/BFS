import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Database connection configuration
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'stadium_booking',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};


const pool = mysql.createPool(dbConfig);


export const db = pool;


export async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('Database connection successful');
        connection.release();
    } catch (error) {
        console.error('Database connection failed:', error.message);

    }
}

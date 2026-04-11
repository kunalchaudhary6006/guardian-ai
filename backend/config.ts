import dotenv from 'dotenv';
dotenv.config();

export const getEnv = (key: string): string => process.env[key] || '';

export const isProduction = process.env.NODE_ENV === 'production';
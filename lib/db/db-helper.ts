/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryResultRow } from 'pg';
import { pool } from './db';
export async function DbQuery<T extends QueryResultRow = any>(query: string, params?: any[]): Promise<T[]> {
    try {
        const result = await pool.query<T>(query, params);
        return result.rows;
    } catch (error) {
        console.error('Database query error:', error instanceof Error ? error.message : error);
        throw error instanceof Error ? error : new Error(String(error));
    }
}
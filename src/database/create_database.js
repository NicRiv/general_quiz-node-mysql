/**
 * Create Database
 * 
 * npm run migrate
 * (node src/database/create_database.js)
 */

import { createPool } from 'mysql2/promise'
import {
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    DB_USERNAME
} from '../config.js'

// Connection to MySQL
export const pool = createPool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USERNAME,
    password: DB_PASSWORD,
})

// Create DB
(async () => {
    try {
        const [res] = await pool.query(`CREATE DATABASE IF NOT EXISTS ${DB_DATABASE}`)

        console.log(res)

        if (res.affectedRows === 0) {
            console.log(`[${DB_DATABASE}] is already exists`)
        } else {
            console.log(`Database [${DB_DATABASE}] created`)
        }

        process.exit()
    } catch (error) {
        return console.log(error)
    }
})()
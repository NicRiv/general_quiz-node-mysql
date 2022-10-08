/**
 * Create Database
 * 
 * npm run migrate
 * (node src/database/migrations/create_db.js)
 */

import { pool } from '../database_init.js'
import { DB_DATABASE } from '../../config.js'

const db = async () => {
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
}

db()
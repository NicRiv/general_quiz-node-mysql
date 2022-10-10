/**
 * Create Quiz seeder
 */

import { pool } from '../db.js'

// Create seed
(async () => {
    try {
        const [res] = await pool.query(`
            INSERT INTO quiz VALUE
                (1, 'pregunta 1', 'r1', 'r2', 'r3', 'r4'),
                (2, 'pregunta 2', 'r1', 'r2', 'r3', 'r4'),
                (3, 'pregunta 3', 'r1', 'r2', 'r3', 'r4')
        `)

        if (res.affectedRows > 0) {
            console.log('Seed added into the table')
        } else {
            console.log('Cannot add seed into table')
        }

        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
})()
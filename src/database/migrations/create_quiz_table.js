/**
 * Create Quiz table
 */

import { pool } from '../db.js'

// Create table
(async () => {
    try {
        // Drop table
        await pool.query('DROP TABLE IF EXISTS quiz')

        // Create
        const [res] = await pool.query(`
            CREATE TABLE IF NOT EXISTS quiz(
                id INT(11) NOT NULL AUTO_INCREMENT, 
                description TEXT DEFAULT NULL,
                q1 VARCHAR(90) DEFAULT NULL,
                q2 VARCHAR(90) DEFAULT NULL,
                q3 VARCHAR(90) DEFAULT NULL,
                q4 VARCHAR(90) DEFAULT NULL,
                answer VARCHAR(90) DEFAULT NULL,
                PRIMARY KEY(id)
            ) 
        `)
        // console.log(res)

        if (res.warningStatus === 0) {
            console.log('Table created')
        } else {
            console.log('The table is already exists')
        }

        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
})()
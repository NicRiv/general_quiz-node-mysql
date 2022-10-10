/**
 * Create Quiz seeder
 */

import { pool } from '../db.js'

// Create seed
(async () => {
    try {
        const [res] = await pool.query(`
            INSERT INTO quiz VALUE
                (1, 'In what year was Jose de San Martin born?', '1777', '1778', '1779', '1780', '1778')
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
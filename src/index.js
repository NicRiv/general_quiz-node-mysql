import app from './app.js'
import { PORT } from './config.js'

// Run server
app.listen(PORT)
console.log(`Server on port - ${PORT}`)
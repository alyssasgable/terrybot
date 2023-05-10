const PORT = 8000
const express = require('express')
const cors = require('cors') 

//initialization of express
const app = express()

app.use(express.json())
app.use(cors())

app.listen(PORT, () => console.log('Horray! Your server is running on PORT ' + PORT))
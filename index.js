const express = require('express')
const cors = require('cors');
const app = express()
// process.env.PORT to ignore 5000 any duplicate issue
const port = process.env.PORT || 5000
// for middle wire issue fixe
app.use(cors());


app.get('/', (req, res) => {
    res.send('server site running successfully')
})

app.listen(port, () => {
    console.log(`Check listening on port ${port}`)
})
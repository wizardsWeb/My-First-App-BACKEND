import express from 'express';
import cors from 'cors';
const app = express()
const port = 5000;

app.use(cors());

app.get('/getData', (req, res) => {
    res.send("Hello World !") 
})

app.listen(port, () => {
    console.log(`APP IS LISTENING ON PORT ${port}`)
})
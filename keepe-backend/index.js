import Express from "express";

const Port = 5000
const app = Express()

import './db/config.js'

import './Model/note.js'

app.get('/', (req, resp) => {
    resp.send("hello")
});



app.listen(Port, () => {
    console.log(`http://localhost:5000`)
})
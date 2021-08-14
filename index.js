require('dotenv').config()
const express = require("express");
const app = express();
const cors = require('cors')
const Note = require('./models/note')
console.log(Note)

const PORT = process.env.PORT


app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello From node server");
});

app.get('/api/notes', (req, res) => {
    Note.find({}).then(notes => {
        res.json(notes)
    })
})

app.post('/api/notes/', (req, res) => {
    const body = req.body
    if (!body.content){
        return res.status(400).json({
            error: "content missing"
        })
    }
    
    const newNote = {
        content: body.content,
        important: body.important || false
    }
    res.json({newNote})
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})



// const notes = [
//   {
//     id: 1,
//     content: "HTML is easy",
//     date: "2020-01-10T17:30:31.098Z",
//     important: true,
//   },
//   {
//     id: 2,
//     content: "Browser can execute only Javascript",
//     date: "2020-01-10T18:39:34.091Z",
//     important: false,
//   },
//   {
//     id: 3,
//     content: "GET and POST are the most important methods of HTTP protocol",
//     date: "2020-01-10T19:20:14.298Z",
//     important: true,
//   },
// ];
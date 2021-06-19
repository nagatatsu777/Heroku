const express = require('express')
const cors = require('cors')
//link: https://infinite-earth-35390.herokuapp.com
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('build'))
let notes = [
  /*{
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }*/
 
    {
      "name": "asd",
      "number": "1234",
      "id": 6
    },
    {
      "name": "qwe",
      "number": "1245",
      "id": 2
    },
    {
      "name": "",
      "number": "",
      "id": 3
    }
  
]
app.get('/', (request, response) => {
  response.send('<h1>Hello Wor!</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})
app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)
  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }

})
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})
app.put('/api/notes',(request,response)=>{
  const personObject = {
    name: request.params.name,
    number: request.params.number,
    id:request.params.id
  }
  notes.concat(personObject)
})
app.post('/api/notes', (request, response) => {
  const body = request.body
  console.log(request.body)
  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }
  const generateId = () => {
    const maxId = notes.length > 0
      ? Math.max(...notes.map(n => n.id))
      : 0
    return maxId + 1
  }
  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  }

  notes = notes.concat(note)

  response.json(note)
})
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

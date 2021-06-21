require('dotenv').config()
const express = require('express')
const cors = require('cors')
//link: https://infinite-earth-35390.herokuapp.com
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('build'))
const Note = require('./model/note.js')
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
  Note.find({}).then(notes => {
    response.json(notes)
  })
})
/*app.get('/api/notes/:id', (request, response) => {
  /*const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)
  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
  Note.findById(request.params.id).then(note => {
    response.json(note)
  })

})*/
app.get('/api/notes/:id', (request, response, next) => {
  Note.findById(request.params.id)
    .then(note => {
      if (note) {
        response.json(note)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/notes/:id', (request, response) => {
  /*const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()*/
  Note.findByIdAndRemove(request.params.id)
  .then(result => {
    response.status(204).end()
  })
  .catch(error => next(error))
})

app.post('/api/notes/:name/:number/:id', (request, response) => {
  if (!request) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }
  /*const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  }*/
  const note = new Note({
    name: request.params.name,
    number: request.params.number,
    id: request.params.id
  })
  console.log(note.name+' '+note.number)
  note.save().then(savedNote => {
    response.json(savedNote)
  })
 // notes = notes.concat(note)

  //response.json(note)
})
app.put('/api/notes/:id', (request, response, next) => {
  const body = request.body

  const note = {
    name: body.name,
    number: body.number,
    id: body.id
  }

  Note.findByIdAndUpdate(request.params.id, note, { new: true })
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))
})
const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

// this has to be the last loaded middleware.
app.use(errorHandler)
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}
const password = process.argv[2]
const url =
  `mongodb+srv://Rath7:${password}@cluster0.myhqw.mongodb.net/notes-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
const noteSchema = new mongoose.Schema({
  name: String,
  number: Number,
  important: Boolean,
})
const Note = mongoose.model('Note', noteSchema)
if(process.argv.length==3){
  console.log('Phone Book')
  Note.find({}).then(result => {
    result.forEach(note => {
      console.log(note.name+' '+note.number)
    })
    mongoose.connection.close()
  })
}
else{
  const iname = process.argv[3]
  const inumber = process.argv[4]
  const note = new Note({
  name: iname,
  number: inumber,
  important: true,
  })

  note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
  })
}
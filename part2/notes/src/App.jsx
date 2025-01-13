import { useEffect, useState } from 'react'
import axios from 'axios'
import Note from './components/Note'



const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote]=useState('a new note...')
  const [showAll, setShowAll] = useState(true)

 const hook = () => {
  console.log('effect')
  axios
    .get('http://localhost:3001/notes')
    .then(response => {
      console.log('promise fulfilled')
      setNotes(response.data)
  })
}
console.log('render', notes.length, 'notes')

useEffect(hook, []) //The second parameter of useEffect is used to specify 
// how often the effect is run. If the second parameter is an empty array [], 
// then the effect is only run along with the first render of the component.


  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1)
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)
  const filterNotes = () => setShowAll(!showAll)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
      <button onClick={filterNotes}> show {showAll ? 'important' : 'all'} </button>
    </div>
  )
}

export default App
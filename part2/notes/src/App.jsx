import { useEffect, useState } from "react";
import Note from "./components/Note";
import noteService from "./services/notes";
import Notification from "./components/Notification";
import Footer from "./components/Footer";


const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)
  
  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
      setNotes(notes.map(n => n.id === id ? returnedNote : n))
    })
    .catch(error => {
      setErrorMessage(
        `Note '${note.content}' was already removed from server`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setNotes(notes.filter(n => n.id !== id));
  })
}

  const hook = () => {
    noteService
      .getAll()
      .then(initialNotes => {
      setNotes(initialNotes);
    });
  };

  useEffect(hook, []); //The second parameter of useEffect is used to specify
  // how often the effect is run. If the second parameter is an empty array [],
  // then the effect is only run along with the first render of the component.

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5
    };

    noteService
    .create(noteObject)
    .then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNewNote("");
    })
  };


  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);
  const filterNotes = () => setShowAll(!showAll);

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
      <button onClick={filterNotes}>
        {" "}
        show {showAll ? "important" : "all"}{" "}
      </button>
      <Footer />
    </div>
  );
};

export default App;

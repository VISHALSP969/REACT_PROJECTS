import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import './App.css';

function App() {
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage when the component mounts
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  // Save notes to localStorage whenever notes state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Handle note input change
  const handleChange = (e) => {
    setNoteText(e.target.value);
  };

  // Handle adding new note
  const addNote = () => {
    if (noteText.trim() !== "") {
      setNotes([...notes, { id: Date.now(), text: noteText }]);
      setNoteText(""); // Clear input after adding
    }
  };

  // Handle deleting a note
  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  // Handle editing a note
  const editNote = (id, newText) => {
    const updatedNotes = notes.map(note => 
      note.id === id ? { ...note, text: newText } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <div className="note-input">
        <textarea
          placeholder="Write a note..."
          value={noteText}
          onChange={handleChange}
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <NoteList notes={notes} deleteNote={deleteNote} editNote={editNote} />
    </div>
  );
}

export default App;

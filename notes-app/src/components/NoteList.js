import React from 'react';
import Note from './Note';
import './NoteList.css';

const NoteList = ({ notes, deleteNote, editNote }) => {
  return (
    <div className="note-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <Note key={note.id} note={note} deleteNote={deleteNote} editNote={editNote} />
        ))
      ) : (
        <p>No notes available. Add a note!</p>
      )}
    </div>
  );
}

export default NoteList;

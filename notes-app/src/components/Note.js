import React, { useState } from 'react';
import './Note.css';

const Note = ({ note, deleteNote, editNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(note.text);

  // Handle switching to edit mode
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Handle saving the edited note
  const handleSaveClick = () => {
    editNote(note.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="note">
      {isEditing ? (
        <>
          <textarea
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <p>{note.text}</p>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Note;

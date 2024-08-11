import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote, pinNote } from '../redux/notesSlice';
import { Note as NoteType } from '../types';

interface NoteProps {
  note: NoteType;
}

const Note: React.FC<NoteProps> = ({ note }) => {
  const dispatch = useDispatch();
  const [bgColor, setBgColor] = useState(note.backgroundColor || '#ffffff');

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  const handlePin = () => {
    dispatch(pinNote(note.id));
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBgColor(event.target.value);
  };

  return (
    <div className="note" style={{ backgroundColor: bgColor }}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <input 
        type="color" 
        value={bgColor} 
        onChange={handleColorChange} 
        title="Choose Background Color"
      />
      <div className="note-actions">
        <i 
          className={`fas fa-thumbtack ${note.pinned ? 'pinned' : ''}`} 
          onClick={handlePin} 
          title="Pin Note"
        ></i>
        <i 
          className="fas fa-trash-alt" 
          onClick={handleDelete} 
          title="Delete Note"
        ></i>
      </div>
    </div>
  );
};

export default Note;

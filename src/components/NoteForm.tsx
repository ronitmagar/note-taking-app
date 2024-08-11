import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notesSlice';

const NoteForm: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newNote = {
      id: Date.now().toString(),
      title,
      content,
      pinned: false,
    };
    dispatch(addNote(newNote));
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title (optional)"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note content"
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;

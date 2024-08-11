import React from 'react';
import { useSelector } from 'react-redux';
import Note from './Note';
import { Note as NoteType } from '../types';

const NoteList: React.FC = () => {
  const notes = useSelector((state: any) => state.notes.notes);


  const sortedNotes = [...notes].sort((a: NoteType, b: NoteType) => Number(b.pinned) - Number(a.pinned));

  return (
    <div className="note-list">
      {sortedNotes.map((note: NoteType) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;

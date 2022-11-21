import React, { useState } from "react";
import CreateArea from "components/CreateArea";
import Header from "components/Header";
import Note from "components/Note";
import Footer from "components/Footer";

const App: React.FC = () => {
  const [notes, setNotes] = useState<{ title: string; content: string }[]>([]);

  const addNote = (note: { title: string; content: string }) => {
    const cpNotes = [...notes];
    cpNotes.push(note);
    setNotes(cpNotes);
    console.log(notes);
  };

  const DeleteNote = (id: number) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== id));
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={DeleteNote}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;

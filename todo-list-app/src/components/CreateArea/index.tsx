import React, { useState } from "react";
import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";

interface CreateAreaProps {
  onAdd: (params: { title: string; content: string }) => void;
}

interface Note {
  title: string;
  content: string;
}

const CreateArea: React.FC<CreateAreaProps> = ({ onAdd }) => {
  const [note, setNote] = useState<Note>({
    title: "",
    content: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    const str = name as string;
    const cpNote = { ...note };
    cpNote[str as keyof Note] = value;
    setNote(cpNote);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  };

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          rows={3}
          placeholder="Take a note..."
          value={note.content}
          onChange={handleChange}
        />
        <Fab onClick={handleSubmit}>
          <Add />
        </Fab>
      </form>
    </div>
  );
};

export default CreateArea;

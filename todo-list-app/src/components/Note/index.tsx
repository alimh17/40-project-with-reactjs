import React from "react";
import { Delete } from "@mui/icons-material";

interface NoteProps {
  key: number;
  id: number;
  title: string;
  content: string;
  onDelete: (id: number) => void;
}

const Note: React.FC<NoteProps> = ({ title, content, id, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleDelete}>
        <Delete />
      </button>
    </div>
  );
};

export default Note;

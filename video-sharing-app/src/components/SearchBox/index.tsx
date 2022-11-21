import React, { useState } from "react";
import { Paper, TextField } from "@mui/material";

interface SearchBoxProps {
  onSubmit: (search: string) => Promise<void>;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => setSearchTerm(event.target.value);

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  };

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <TextField
        fullWidth={true}
        label="search"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </Paper>
  );
};

export default SearchBox;

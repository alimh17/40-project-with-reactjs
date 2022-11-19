import React from "react";

const Header = ({ search, setSearch }) => {
  const handleSearchMovies = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container-fluid d-flex justify-content-between align-items-center py-2 sticky-top border-bottom bg-dark">
      <h2 className="  text-light">Movies</h2>
      <input
        placeholder="search"
        value={search}
        className="form-control mx-2"
        onChange={handleSearchMovies}
      />
    </div>
  );
};

export default Header;

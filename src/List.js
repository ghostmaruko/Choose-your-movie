import React from "react";
import Card from "./sub/Card";

const List = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const [movies, setMovies] = React.useState([]);

  const searchMovie = async () => {
    const res = await fetch(
      "https://www.omdbapi.com/?s=" + searchValue + "&apikey=42f82aeb"
    );
    const json = await res.json();
    setMovies([...json.Search]);
  };

  return (
    <div className="list">
      {/* SEARCH BAR */}
      <div className="searchBar">
        <input
          className="inputSearch"
          type="text"
          value={searchValue}
          placeholder="Search..."
          onChange={(e) => setSearchValue(e.currentTarget.value)}
        ></input>
        <button className="btnBar" onClick={searchMovie}>
          Search
        </button>
      </div>
      {/* ITEMS LIST */}
      <div className="itemList">
        {movies.map((object, key) => (
          <Card
            id={object.imdbID}
            title={object.Title}
            description={object.Year}
            poster={object.Poster}
          />
        ))}
      </div>
    </div>
  );
};

export default List;

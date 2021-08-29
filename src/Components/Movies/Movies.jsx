import React from "react";
import "./Movies.scss";

export default function Movies() {
  return (
    <div>
      This is Movies Component
      <div>
        Display a list of movies. That has:
        <br />
        movie poster movie name movie rating movie genre
        <br /> <br />
        Functionalities:
        <br />
        Tha ability to bookmark the movie. The ability to search for a specific
        movie. Once you click on a movie, it will move you to the singe page of
        that movie. Use lazy loading functionality.
      </div>
    </div>
  );
}

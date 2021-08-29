import React from "react";
import "./SingleMovie.scss";

export default function SingleMovie() {
  return (
    <div>
      This is Single Movie Components:
      <div>
        Display: the poster of the movie and a description. 5 of the actors that
        played in the movie. a section for related movies, at least 5. the
        trailer of the movie. the director name. the movie rating and votes
        count.
        <br />
        <br />
        Functionalities:
        <br />
        Tha ability to bookmark the movie. Once you click on an actor you move
        to their page.
      </div>
    </div>
  );
}

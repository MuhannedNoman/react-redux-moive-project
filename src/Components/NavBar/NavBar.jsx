import React from "react";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <div>
      This is The Header Component it should contain navigation, Login, Search
      <ul>
        <li>Include a Home button that moves the user to the home page.</li>
        <li>
          Include a Genre button that display a dropdown list of all movies
          genre.
        </li>
        <li>Include a Actor button that moves the user to the Actors Page.</li>
        <li>Include an About page that describes the website.</li>
        <li>
          Include a Bookmarked button that displays the movies user wanted to
          bookmark
        </li>
        <li>
          Include Sign In button that displays a modal for the user to Sign in
          using Google. Once the use is logged in display their name and avatar.
        </li>
        <br />
        only show in home:
        <li>
          In Home page show a filter based on popular, release date, top rated,
          now playing, and upcoming
        </li>
      </ul>
    </div>
  );
}

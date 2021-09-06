import React from "react";
import { useSelector } from "react-redux";
import "./Bookmark.scss";

export default function Bookmark() {
  const bookmarkedMovies = useSelector((state) => state.bookmarks.bookmarks);
  console.log(bookmarkedMovies);
  return (
    <div>
      This is the Bookmark Component: its accessed only when the user is logged
      in Display the movies the user bookmarked. Only if they are signed in.
    </div>
  );
}

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ActorsList({ actors }) {
  const posterBaseUrl = "https://image.tmdb.org/t/p/original";

  ActorsList.propTypes = {
    actors: PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string.isRequired,
        fontSize: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {actors.map((actor) => (
        <div key={actor.id}>
          <Link to={`/actors/${actor.id}`}>
            <img
              style={{
                height: "12rem",
                borderRadius: "10px",
                marginRight: "1rem",
              }}
              src={posterBaseUrl + actor.profile_path}
              alt={actor.name}
            />
            <p key={actor.id}>{actor.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ActorsList;

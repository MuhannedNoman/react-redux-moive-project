import React, { useState, useEffect } from "react";
import { Typography, Switch } from "antd";

const { Paragraph } = Typography;

// eslint-disable-next-line
function ActorDetail({ match }) {
  const [actor, setActor] = useState("");
  const [loading, setLoading] = useState(false);
  const [ellipsis, setEllipsis] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      // eslint-disable-next-line
      `https://api.themoviedb.org/3/person/${match.params.id}?api_key=e15bbb219d7a04f817488309f7efe37f`
    )
      .then((response) => response.json())
      .then((data) => {
        setActor(data);
        setLoading(false);
      });
    // eslint-disable-next-line
  }, [match.params.id]);

  console.log(actor, loading);

  return (
    <div style={{ color: "white", textAlign: "center" }}>
      <h1 style={{ color: "white" }}>Actor Detail</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1 style={{ color: "white" }}>{actor.name}</h1>
          <small>{actor.place_of_birth}</small>
          <Switch
            style={{ display: "none" }}
            checked={ellipsis}
            onChange={() => {
              setEllipsis(!ellipsis);
            }}
          />
          <div style={{ display: "flex" }}>
            <img
              style={{
                borderRadius: "10px",
                boxShadow: "5px 5px 3px black",
                width: "20%",
                height: "auto",
                objectFit: "cover",
              }}
              src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
              alt={actor.name}
            />
            <Paragraph
              style={{ color: "white" }}
              ellipsis={
                ellipsis
                  ? {
                      rows: 2,
                      expandable: true,
                      symbol: "more",
                    }
                  : false
              }
            >
              {actor?.biography}
            </Paragraph>
          </div>
        </div>
      )}
    </div>
  );
}

export default ActorDetail;

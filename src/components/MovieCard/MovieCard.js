import { Card } from "react-bootstrap";

import "./movieCard.css";

const MovieCard = () => {
  return (
    <a className="movie-card" href="#">
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/200px300" />
        <Card.Body>
          <Card.Title className="text-truncate">Movie Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Date of release
          </Card.Subtitle>
          <Card.Text className="text-truncate-3-lines">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default MovieCard;

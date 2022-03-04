import { Card } from "react-bootstrap";

import "./movieCard.css"

const MovieCard = () => {
  return (
    <Card>
      <Card.Img variant="top" src="https://via.placeholder.com/200px300" />
      <Card.Body>
        <Card.Title className="text-truncate">Movie Title</Card.Title>
        <Card.Text className="text-truncate-3-lines">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;

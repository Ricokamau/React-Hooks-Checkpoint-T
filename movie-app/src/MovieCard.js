import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = ({ movie }) => (
  <Card className="mb-4 shadow-sm" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.posterURL} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>{movie.description}</Card.Text>
      <Card.Text>Rating: {movie.rating}</Card.Text>
    </Card.Body>
  </Card>
);

export default MovieCard;

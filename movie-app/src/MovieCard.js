// src/MovieCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <Card className="mb-4 shadow-sm" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.posterURL} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>{movie.description}</Card.Text>
      <Card.Text>Rating: {movie.rating}</Card.Text>
      <Link to={`/movie/${movie.title}`}>
        <Button variant="primary">View Details</Button>
      </Link>
    </Card.Body>
  </Card>
);

export default MovieCard;

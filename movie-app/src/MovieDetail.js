// src/MovieDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const MovieDetail = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find(m => m.title === title);

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div className="text-center">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">
        <Button variant="primary" className="mt-4">Back to Home</Button>
      </Link>
    </div>
  );
};

export default MovieDetail;

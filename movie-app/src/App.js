// src/App.js
import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import MovieList from './MovieList';
import Filter from './Filter';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL: "https://filmartgallery.com/cdn/shop/files/Inception-Vintage-Movie-Poster-Original-1-Sheet-27x41.jpg?v=1691730160",
      rating: 8.8
    },

    {
      title: "The Dark Knight",
      description: "A superhero film directed by Christopher Nolan",
      posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ekE6Hhz9gvIbiFSUPxt-FyAh4zXTXX0bjQ&s",
      rating: 9.0
    },
    {
      title: "Interstellar",
      description: "A science fiction film directed by Christopher Nolan",
      posterURL: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rating: 8.6
    },
    {
      title: "The Matrix",
      description: "A science fiction action film directed by the Wachowskis",
      posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUiwklBuJzAVvpNK6C7FptD5eKRvwtGU2l7Q&s",
      rating: 8.7
    },
    {
      title: "Fight Club",
      description: "A film directed by David Fincher based on a novel by Chuck Palahniuk",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: 8.8
    },
    {
      title: "The Shawshank Redemption",
      description: "A drama film based on Stephen King's novella",
      posterURL: "https://m.media-amazon.com/images/I/71715eBi1sL._AC_SL1000_.jpg",
      rating: 9.3
    },
    {
      title: "Pulp Fiction",
      description: "A crime film directed by Quentin Tarantino",
      posterURL: "https://filmartgallery.com/cdn/shop/products/Pulp-Fiction-Vintage-Movie-Poster-Original-1-Sheet-27x41-12.jpg?v=1671570010",
      rating: 8.9
    },
    {
      title: "The Godfather",
      description: "A crime film directed by Francis Ford Coppola",
      posterURL: "https://i.ebayimg.com/images/g/X~cAAOSwz2ZiaB2w/s-l1600.jpg",
      rating: 9.2
    }
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState(0);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0
  });

  const addMovie = (e) => {
    e.preventDefault();
    setMovies([...movies, newMovie]);
    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: 0
    });
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
    movie.rating >= filterRate
  );

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center my-4">Rico's Movie App</h1>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Filter setFilterTitle={setFilterTitle} setFilterRate={setFilterRate} />
        </Col>
      </Row>
      <Row>
        <Col>
          <MovieList movies={filteredMovies} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="text-center my-4">Add a New Movie</h2>
          <Form onSubmit={addMovie}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={newMovie.title}
                onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={newMovie.description}
                onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                type="text"
                value={newMovie.posterURL}
                onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                value={newMovie.rating}
                onChange={(e) => setNewMovie({ ...newMovie, rating: Number(e.target.value) })}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Add Movie
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default App;

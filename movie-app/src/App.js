// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import MovieList from './MovieList';
import Filter from './Filter';
import MovieDetail from './MovieDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan",
      posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXWnBnPN47nWvqWJAxw-vmchKc_2u1zkG6Bw&s",
      rating: 8.8,
      trailerURL: "https://www.youtube.com/embed/8hP9D6kZseM"
    },
    {
      title: "The Dark Knight",
      description: "A superhero film directed by Christopher Nolan",
      posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ekE6Hhz9gvIbiFSUPxt-FyAh4zXTXX0bjQ&s",
      rating: 9.0,
      trailerURL: "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
      title: "Interstellar",
      description: "A science fiction film directed by Christopher Nolan",
      posterURL: "https://artofthemovies.co.uk/cdn/shop/files/IMG_7648_1024x1024@2x.jpg?v=1720454458",
      rating: 8.6,
      trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      title: "The Matrix",
      description: "A science fiction action film directed by the Wachowskis",
      posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGxrulP2SDkHVakshW7oHGlD8_0f9J669oDw&s",
      rating: 8.7,
      trailerURL: "https://www.youtube.com/embed/vKQi3bBA1y8"
    },
    {
      title: "Fight Club",
      description: "A film directed by David Fincher based on a novel by Chuck Palahniuk",
      posterURL: "https://m.media-amazon.com/images/I/61tbxfA-uPL._AC_UF1000,1000_QL80_.jpg",
      rating: 8.8,
      trailerURL: "https://www.youtube.com/embed/qtRKdVHc-cE"
    },
    {
      title: "The Shawshank Redemption",
      description: "A drama film based on Stephen King's novella",
      posterURL: "https://m.media-amazon.com/images/I/51rXi2SXCXL._AC_UF894,1000_QL80_.jpg",
      rating: 9.3,
      trailerURL: "https://www.youtube.com/embed/6hB3S9bIaco"
    },
    {
      title: "Pulp Fiction",
      description: "A crime film directed by Quentin Tarantino",
      posterURL: "https://i.ebayimg.com/images/g/dDkAAOSwrVJggmYw/s-l1600.jpg",
      rating: 8.9,
      trailerURL: "https://www.youtube.com/embed/s7EdQ4FqbhY"
    },
    {
      title: "The Godfather",
      description: "A crime film directed by Francis Ford Coppola",
      posterURL: "https://i.ebayimg.com/images/g/X~cAAOSwz2ZiaB2w/s-l1600.jpg",
      rating: 9.2,
      trailerURL: "https://www.youtube.com/embed/sY1S34973zA"
    }
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState(0);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
    trailerURL: ""
  });

  const addMovie = (e) => {
    e.preventDefault();
    setMovies([...movies, newMovie]);
    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: 0,
      trailerURL: ""
    });
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
    movie.rating >= filterRate
  );

  return (
    <Router>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center my-4">Rico's Movie App</h1>
          </Col>
        </Row>
        <Routes>
          <Route
            path="/"
            element={
              <>
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
                      <Form.Group>
                        <Form.Label>Trailer URL</Form.Label>
                        <Form.Control
                          type="text"
                          value={newMovie.trailerURL}
                          onChange={(e) => setNewMovie({ ...newMovie, trailerURL: e.target.value })}
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit" className="w-100">
                        Add Movie
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </>
            }
          />
          <Route path="/movie/:title" element={<MovieDetail movies={movies} />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;

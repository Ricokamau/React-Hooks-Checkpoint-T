import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const Filter = ({ setFilterTitle, setFilterRate }) => (
  <Form className="mb-4">
    <Row>
      <Col>
        <Form.Control
          type="text"
          placeholder="Search by title"
          onChange={(e) => setFilterTitle(e.target.value)}
        />
      </Col>
      <Col>
        <Form.Control
          type="number"
          placeholder="Search by rating"
          onChange={(e) => setFilterRate(e.target.value)}
        />
      </Col>
    </Row>
  </Form>
);

export default Filter;

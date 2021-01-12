import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Breadcrumb, Alert, Button, Container, Row, Col, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Form>
          <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="example@yahoo.com" />
            <Form.Text className="text-muted">
              We don't share your email with anyone.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="Password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">Login</Button>
        </Form>

        <Card className="my-3" style={{ color: "#000" }}>
          <Card.Img src="https://picsum.photos/200/80" />
          <Card.Body>
            <Card.Title>Hello World</Card.Title>
            <Card.Text> The way you find the world and expore the world is quite different. </Card.Text>
            <Button variant="warning">Read More >> </Button>
          </Card.Body>
        </Card>

        <Breadcrumb>
          <Breadcrumb.Item> Home </Breadcrumb.Item>
          <Breadcrumb.Item> Services </Breadcrumb.Item>
          <Breadcrumb.Item> About </Breadcrumb.Item>
          <Breadcrumb.Item active> Contact </Breadcrumb.Item>
        </Breadcrumb>

        <Alert variant="danger"> Something went wrong!!! </Alert>
      </header>
    </div>
  );
}

export default App;

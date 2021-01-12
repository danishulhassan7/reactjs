import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Breadcrumb, Alert, Button, Container, Row, Col, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <header className="App-header">
        <Row>
        <Form>
          <Col md>
          <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="example@yahoo.com" />
              <Form.Text className="text-muted">
                We don't share your email with anyone.
              </Form.Text>
            </Form.Group>
          </Col>

          <Col md>
          <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="Password" placeholder="Password" />
            </Form.Group>
            </Col>
            <Button variant="primary" type="submit">Login</Button>
          </Form>
        </Row>


        <Row>
          <Col>
          <Card className="my-3" style={{ color: "#000" }}>
            <Card.Img src="https://picsum.photos/200/80" />
            <Card.Body>
              <Card.Title>Hello World</Card.Title>
              <Card.Text> The way you find the world and expore the world is quite different. </Card.Text>
              <Button variant="warning">Read More >> </Button>
            </Card.Body>
        </Card>
          </Col>
        </Row>

        <Row>
          <Col>
          <Breadcrumb>
            <Breadcrumb.Item> Home </Breadcrumb.Item>
            <Breadcrumb.Item> Services </Breadcrumb.Item>
            <Breadcrumb.Item> About </Breadcrumb.Item>
            <Breadcrumb.Item active> Contact </Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant="danger"> Something went wrong!!! </Alert>
          </Col>
        </Row>
        </header>
      </Container>
    </div>
  );
}

export default App;

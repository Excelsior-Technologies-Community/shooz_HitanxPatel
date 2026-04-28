import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./FeedbackSection.css";

const CommentSection = () => {
  return (
    <Container className="commentSection__container">
      
      <h2 className="commentSection__title">
        Leave A Comment
      </h2>

      <p className="commentSection__subtitle">
        Your email address will not be published. Required fields are marked *
      </p>

      <Form className="commentSection__form">

        <Row className="commentSection__row">
          
          <Col md={6} className="mb-3 mb-md-4">
            <Form.Control
              type="text"
              placeholder="Name"
              className="commentSection__input"
            />
          </Col>

          <Col md={6}>
            <Form.Control
              type="email"
              placeholder="Email"
              className="commentSection__input"
            />
          </Col>

        </Row>

        <Form.Group className="commentSection__textareaGroup">
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Message"
            className="commentSection__textarea"
          />
        </Form.Group>

        <Button className="commentSection__btn">
          POST COMMENT
        </Button>

      </Form>

      <p className="commentSection__note text-center">
        Please note, comments must be approved before they are published
      </p>

    </Container>
  );
};

export default CommentSection;
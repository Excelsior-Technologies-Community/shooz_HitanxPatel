import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./BlogGrid.css";
import { Link } from "react-router-dom";

const BlogGrid = () => {
  const blogs = [
    {
      id: 1,
      img: "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-2.png?v=1731500928&width=1080",
      title: "The Future Of Footwear: A Look Ahead",
      date: "10-28-2024",
      desc: "Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam...",
    },
    {
      id: 2,
      img: "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-1.png?v=1731500921&width=900",
      title: "Eco-Friendly Footwear: Sustainable Style",
      date: "10-28-2024",
      desc: "Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam...",
    },
    {
      id: 3,
      img: "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-6.png?v=1731500962&width=1080",
      title: "The Ultimate Guide to Sneaker Care",
      date: "10-17-2024",
      desc: "Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam...",
    },
    {
      id: 4,
      img: "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-5.png?v=1731500994&width=900",
      title: "How to Style Your Favorite Sneakers",
      date: "10-17-2024",
      desc: "Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam...",
    },
    {
      id: 5,
      img: "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-4.png?v=1731500987&width=900",
      title: "The Evolution of Footwear: A Brief History",
      date: "10-17-2024",
      desc: "Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam...",
    },
    {
      id: 6,
      img: "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-3.png?v=1731500936&width=900",
      title: "Finding the Perfect Fit: A Shoe Buying Guide",
      date: "9-26-2024",
      desc: "Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam...",
    },
  ];

  return (
    <div className="blogGrid__wrapper py-5">
      <Container>
        <Row>
          {blogs.map((item) => (
            <Col lg={6} key={item.id} className="mb-4">
              <Card className="blogGrid__card">
                
                <div className="blogGrid__imgWrapper">
                  <Card.Img
                    variant="top"
                    src={item.img}
                    className="blogGrid__img"
                  />
                </div>

                <Card.Body className="blogGrid__body">

                  <div className="blogGrid__meta">
                    <span className="blogGrid__date">{item.date}</span>
                    
                    <span className="divider">|</span>
                    
                    <span className="blogGrid__comments">0 COMMENTS</span>
                  </div>
                  
                  <Card.Title className="blogGrid__title">
                    {item.title}
                  </Card.Title>

                  <div className="blogGrid__divider"></div>

                  <Card.Text className="blogGrid__desc">
                    {item.desc}
                  </Card.Text>

                  {/* <Button className="blogGrid__btn">
                    READ MORE →
                  </Button> */}

                  <Link to="/BlogMain" className="btn blogGrid__btn">
                    READ MORE →
                  </Link>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BlogGrid;
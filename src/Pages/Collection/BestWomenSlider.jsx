import React, { useRef } from "react";
import { Container, Card } from "react-bootstrap";
import "./BestWomenSlider.css";

const BestWomenSlider = () => {
  const scrollRef = useRef();

  const products = Array(8).fill({
    title: "Example Product Title",
    price: "$19.99",
  });

  const scroll = (direction) => {
    const scrollAmount = 290;
    if (direction === "left") {
      scrollRef.current.scrollLeft -= scrollAmount;
    } else {
      scrollRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <section className="bestWomenSlider_section">
      <Container>

        <div className="bestWomenSlider_heading text-center">
          <p className="bestWomenSlider_subtitle">BEST WOMEN</p>
          <h2 className="bestWomenSlider_title">Lookbook Style</h2>
        </div>

        <div className="bestWomenSlider_wrapper">

          <button
            className="bestWomenSlider_arrow left"
            onClick={() => scroll("left")}
          >
            &#10094;
          </button>

          <div className="bestWomenSlider_scroll" ref={scrollRef}>
            {products.map((item, index) => (
              <Card className="bestWomenSlider_card" key={index}>
                <div className="bestWomenSlider_imgWrapper">
                  <Card.Img
                    src="/Imgs/Screenshot 2026-04-17 191551.png"
                    className="bestWomenSlider_img"
                  />
                </div>

                <Card.Body className="text-center">
                  <Card.Title className="bestWomenSlider_productTitle">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="bestWomenSlider_price">
                    {item.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>

          <button
            className="bestWomenSlider_arrow right"
            onClick={() => scroll("right")}
          >
            &#10095;
          </button>

        </div>
      </Container>
    </section>
  );
};

export default BestWomenSlider;
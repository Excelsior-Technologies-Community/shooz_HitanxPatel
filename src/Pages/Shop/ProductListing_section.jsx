import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ProductListing_section.css";

function ProductListing() {
  return (
    <section className="productListing_section">
      <Container>

        <div className="productListing_categories">
            <ul className="productListing_categories_list">
                <li className="productListing_category_item">
                    Athletic Footwear <span className="productListing_count">(8)</span>
                </li>
                <li className="productListing_category_item">
                    Boots for Every Occasion <span className="productListing_count">(8)</span>
                </li>
                <li className="productListing_category_item">
                    Luxury Leather Shoes <span className="productListing_count">(8)</span>
                </li>
                <li className="productListing_category_item">
                    Sandals & Slides <span className="productListing_count">(8)</span>
                </li>
                <li className="productListing_category_item">
                    Sneakerhead’s Haven <span className="productListing_count">(10)</span>
                </li>
            </ul>
        </div>

        <Row className="productListing_cards_row">

            <Col className="productListing_col">
                <div className="productListing_card">
                <img src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=540" className="productListing_card_img" />
                <h5 className="productListing_card_title">Athletic Footwear
                    <span className="productListing_card_count">8 Products</span>
                </h5>
                </div>
            </Col>

            <Col className="productListing_col">
                <div className="productListing_card">
                <img src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-4.png?v=1731657987&width=540" className="productListing_card_img" />
                <h5 className="productListing_card_title">Boots for Every Occasion
                    <span className="productListing_card_count">8 Products</span>
                </h5>
                </div>
            </Col>

            <Col className="productListing_col">
                <div className="productListing_card">
                <img src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-6.png?v=1731658012&width=540" className="productListing_card_img" />
                <h5 className="productListing_card_title">Luxury Leather Shoes
                    <span className="productListing_card_count">8 Products</span>
                </h5>
                </div>
            </Col>

            <Col className="productListing_col">
                <div className="productListing_card">
                <img src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-2.png?v=1731657969&width=540" className="productListing_card_img" />
                <h5 className="productListing_card_title">Sandals & Slides
                    <span className="productListing_card_count">8 Products</span>
                </h5>
                </div>
            </Col>

            <Col className="productListing_col">
                <div className="productListing_card">
                <img src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-3.png?v=1731657979&width=540" className="productListing_card_img" />
                <h5 className="productListing_card_title">Sneakerhead’s Haven
                    <span className="productListing_card_count">8 Products</span>
                </h5>
                </div>
            </Col>

        </Row>

      </Container>
    </section>
  );
}

export default ProductListing;
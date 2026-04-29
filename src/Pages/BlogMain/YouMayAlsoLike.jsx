import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { FaComment } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./YouMayAlsoLike.css";

const blogData = [
  {
    img: "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-2.png",
    title: "The Future Of Footwear: A Look Ahead",
    date: "October 28, 2024",
  },
  {
    img: "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-3.png",
    title: "Eco-Friendly Footwear: Sustainable Style",
    date: "October 28, 2024",
  },
  {
    img: "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-4.png",
    title: "The Ultimate Guide To Sneaker Care",
    date: "October 17, 2024",
  },
  {
    img: "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-2.png",
    title: "New Sneakers Trends 2024",
    date: "October 20, 2024",
  },
  {
    img: "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-3.png",
    title: "Best Running Shoes",
    date: "October 15, 2024",
  },
];

const YouMayAlsoLike = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,

    responsive: [
        {
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
            centerMode: false,
        },
        },
        {
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            centerMode: false,
        },
        },
    ],
    };

  return (
    <section className="youMayAlsoLike__section">
      <Container>
        <h2 className="youMayAlsoLike__heading text-center mb-5">
          You may so like
        </h2>

        <Slider {...settings}>
          {blogData.map((item, index) => (
            <div key={index} className="px-2">
              <div className="youMayAlsoLike__card">
                <div className="youMayAlsoLike__imgWrapper">
                  <img src={item.img} className="youMayAlsoLike__img" />

                  <div className="youMayAlsoLike__overlay">
                    <div className="youMayAlsoLike__content">
                      <p className="youMayAlsoLike__date">
                        {item.date} <FaComment /> 0 Comments
                      </p>
                      <h5 className="youMayAlsoLike__title">
                        {item.title}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default YouMayAlsoLike;
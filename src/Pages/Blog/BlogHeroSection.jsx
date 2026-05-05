import React from "react";
import "./BlogHeroSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const BlogHeroSection = () => {
  return (
    <div className="bh_wrapper">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        loop={true}
      >
        <SwiperSlide>
          <div className="bh_item row align-items-center">
            <div className="col-lg-6 bh_content">
              <p className="bh_tag">FEATURED POST</p>

              <h2 className="bh_title">
                The Future of Footwear: A Look Ahead
              </h2>

              <div className="bh_meta">
                <span>October 28, 2024</span>
                <span className="bh_divider">|</span>
                <span>Qodex Web</span>
                <span className="bh_divider">|</span>
                <span className="bh_comments">
                  💬 0 Comments
                </span>
              </div>

              <p className="bh_desc">
                Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam lacus. Non odio euismod lacinia at quis risus sed vulputate...
              </p>

              <button className="bh_btn">Read More &gt;</button>
            </div>

            <div className="col-lg-6 bh_imgWrap">
              <img
                src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-2.png?v=1731500928&width=2048"
                alt=""
                className="bh_img"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bh_item row align-items-center">
            <div className="col-lg-6 bh_content">
              <p className="bh_tag">FEATURED POST</p>

              <h2 className="bh_title">
                Eco-Friendly Footwear: Sustainable Style  
              </h2>

              <div className="bh_meta">
                <span>October 28, 2024</span>
                <span className="bh_divider">|</span>
                <span>Qodex Web</span>
                <span className="bh_divider">|</span>
                <span className="bh_comments">
                  💬 0 Comments
                </span>
              </div>

              <p className="bh_desc">
                Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam lacus. Non odio euismod lacinia at quis risus sed vulputate...
              </p>

              <button className="bh_btn">Read More &gt;</button>
            </div>

            <div className="col-lg-6 bh_imgWrap">
              <img
                src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-1.png?v=1731500921&width=1080"
                alt=""
                className="bh_img"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bh_item row align-items-center">
            <div className="col-lg-6 bh_content">
              <p className="bh_tag">FEATURED POST</p>

              <h2 className="bh_title">
                The Ultimate Guide to Sneaker Care
              </h2>

              <div className="bh_meta">
                <span>October 17, 2024</span>
                <span className="bh_divider">|</span>
                <span>Qodex Web</span>
                <span className="bh_divider">|</span>
                <span className="bh_comments">
                  💬 0 Comments
                </span>
              </div>

              <p className="bh_desc">
                Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam lacus. Non odio euismod lacinia at quis risus sed vulputate...
              </p>

              <button className="bh_btn">Read More &gt;</button>
            </div>

            <div className="col-lg-6 bh_imgWrap">
              <img
                src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-6.png?v=1731500962&width=1080"
                alt=""
                className="bh_img"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BlogHeroSection;
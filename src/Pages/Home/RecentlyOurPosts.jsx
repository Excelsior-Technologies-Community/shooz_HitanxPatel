import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RecentlyOurPosts.css";
import { FaRegCommentDots } from "react-icons/fa";

const RecentlyOurPosts = () => {
  return (
    <section className="recentPostsSection py-5">
      <div className="container">

        <div className="recentPostsSection_header mb-5">
          <p className="recentPostsSection_subtitle">FROM THE BLOG</p>
          <h2 className="recentPostsSection_title">Recently Our Posts</h2>
          <p className="recentPostsSection_desc">
            Sit amet consectetur adipisicing elit, sed do <br/> eiusmod tempor incididunt ut labore et dolore <br/> magna aliqua.
          </p>
        </div>

        <div className="row">
          
          <div className="col-lg-7 mb-4">
            <div className="recentPostsSection_mainCard position-relative">
              <img
                src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-2.png?v=1731500928&width=1512"
                alt="main"
                className="img-fluid w-100 recentPostsSection_mainImg"
              />

              <div className="recentPostsSection_overlay">
                <p className="recentPostsSection_date1 d-flex align-items-center gap-2">
                  Oct 28 2024
                  <FaRegCommentDots className="recentPostsSection_icon1" />
                  0 comments
                </p>
                <h4 className="recentPostsSection_mainTitle">
                  The Future Of Footwear: A Look Ahead
                </h4>
              </div>
            </div>
          </div>

          <div className="col-lg-5">

            <div className="recentPostsSection_sideItem d-flex align-items-center mb-4">
              <div className="recentPostsSection_imgWrapper">
                <img
                  src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-1.png?v=1731500921&width=360"
                  alt=""
                  className="recentPostsSection_sideImg"
                />
              </div>
              <div className="ms-3">
                <p className="recentPostsSection_date d-flex align-items-center gap-2">
                  Oct 28 2024
                  <FaRegCommentDots className="recentPostsSection_icon" />
                  0 comments
                </p>
                <h5 className="recentPostsSection_sideTitle">
                  Eco-Friendly Footwear: Sustainable Style
                </h5>
              </div>
            </div>

            <div className="recentPostsSection_sideItem d-flex align-items-center mb-4">
              <div className="recentPostsSection_imgWrapper">
                <img
                  src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-6.png?v=1731500962&width=360"
                  alt=""
                  className="recentPostsSection_sideImg"
                />
              </div>
              <div className="ms-3">
                <p className="recentPostsSection_date d-flex align-items-center gap-2">
                  Oct 28 2024
                  <FaRegCommentDots className="recentPostsSection_icon" />
                  0 comments
                </p>
                <h5 className="recentPostsSection_sideTitle">
                  The Ultimate Guide to Sneaker Care
                </h5>
              </div>
            </div>

            <div className="recentPostsSection_sideItem d-flex align-items-center">
              <div className="recentPostsSection_imgWrapper">
                <img
                  src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-5.png?v=1731500994&width=360"
                  alt=""
                  className="recentPostsSection_sideImg"
                />
              </div>
              <div className="ms-3">
                <p className="recentPostsSection_date">Oct 17 2024 • 0 comments</p>
                <h5 className="recentPostsSection_sideTitle">
                  How to Style Your Favorite Sneakers
                </h5>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentlyOurPosts;
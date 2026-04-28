import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MixedContentSection.css";

const MixedContentSection = () => {
  return (
    <div className="mixedContentSection__container container py-5">

      <p className="mixedContentSection__text text-center">
        Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam lacus.
      </p>

      <div className="mixedContentSection__center mb-4">
        <img
          src="https://cdn.shopify.com/s/files/1/0588/3179/8454/files/BD2.jpg?v=1630596723"
          alt="img"
          className="mixedContentSection__img img-fluid"
        />
      </div>

      <p className="mixedContentSection__text text-center">
        Non odio euismod lacinia at quis risus sed vulputate odio. Quis auctor elit sed vulputate mi. Id aliquet lectus proin nibh nisl condimentum id. Faucibus et molestie ac feugiat sed. Id volutpat lacus laoreet non. Ac tincidunt vitae semper quis.
      </p>

      <div className="mixedContentSection__videoWrapper mb-5">
        <iframe
          className="mixedContentSection__video"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="video"
          allowFullScreen
        ></iframe>
      </div>

      <div className="mixedContentSection__bigSpace"></div>

      <div className="mixedContentSection__center mb-4">
        <img
          src="https://cdn.shopify.com/s/files/1/0588/3179/8454/files/BD3.jpg?v=1630596723"
          alt="img"
          className="mixedContentSection__img img-fluid"
        />
      </div>

      <p className="mixedContentSection__text text-center">
        Pretium aenean pharetra magna ac. Massa sed elementum tempus egestas. Ut faucibus pulvinar elementum integer enim. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Habitant morbi tristique senectus et netus et malesuada. A arcu cursus vitae congue. Morbi quis commodo odio aenean. Libero enim sed faucibus turpis in eu mi bibendum neque. Pulvinar neque laoreet suspendisse interdum consectetur.
      </p>

      <div className="mixedContentSection__center mb-4">
        <img
          src="https://cdn.shopify.com/s/files/1/0588/3179/8454/files/BD4.jpg?v=1630596723"
          alt="img"
          className="mixedContentSection__img img-fluid"
        />
      </div>

      <p className="mixedContentSection__text1 text-center">
         Mollis Nunc Sed Id Semper
      </p>

      <p className="mixedContentSection__text text-center">
         Nisl suscipit adipiscing bibendum est ultricies integer. Ultricies mi eget mauris pharetra et ultrices. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Pellentesque id nibh tortor id aliquet lectus proin. Tellus orci ac auctor augue. Tortor condimentum lacinia quis vel eros donec ac odio tempor.
      </p>

      <div className="mixedContentSection__center mb-4">
        <img
          src="https://cdn.shopify.com/s/files/1/0588/3179/8454/files/BD5.jpg?v=1630596723"
          alt="img"
          className="mixedContentSection__img img-fluid"
        />
      </div>

    </div>
  );
};

export default MixedContentSection;
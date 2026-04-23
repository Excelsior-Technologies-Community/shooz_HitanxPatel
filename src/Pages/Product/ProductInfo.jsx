import React from "react";
import "./ProductInfo.css";

const ProductInfo = () => {
  return (
    <div className="productinfo-container container mt-5">
      <div className="row">
        <div className="col-md-7">
          <ul className="nav productinfo-tabs mb-3">
            <li className="nav-item">
              <button className="nav-link active">Description</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Material</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Reviews</button>
            </li>
          </ul>

          <div className="productinfo-content">
            <p>
              Integer ante arcu, accumsan a, consectetuer eget, posuere ut,
              mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum
              nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras
              id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla
              eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed
              lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo
              pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec
              neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis,
              nisi. Curabitur ligula sapien, tincidunt non, euismod vitae,
              posuere imperdiet, leo. Maecenas malesuada.
            </p>
            <p>
              Praesent congue erat at massa. Sed cursus turpis vitae tortor.
              Donec posuere vulputate arcu. Phasellus accumsan cursus velit.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue,
              elit erat euismod orci, ac placerat dolor lectus quis orci.
              Phasellus consectetuer vestibulum elit. Aenean tellus metus,
              bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla
              pede sit amet augue. In turpis. Pellentesque posuere.
            </p>
          </div>
        </div>

        <div className="col-md-5">
          <h5 className="productinfo-related-title mb-3">Related products</h5>

          <div className="row g-3">
            <div className="col-6">
              <div className="productinfo-card card">
                
                <div className="productinfo-img-wrapper">
                    <img
                    src="https://qx-shooz.myshopify.com/cdn/shop/files/product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.jpg?v=1731310932&width=720"
                    className="card-img-top"
                    alt="product"
                    />
                </div>
                    <div className="card-body">
                        <h6 className="productinfo-card-title">
                            Breathable Mesh Slip-Ons
                        </h6>
                        <p className="productinfo-price">$25.00</p>
                        <button className="btn btn-link productinfo-addcart">
                            + Add to Cart
                        </button>
                    </div>
              </div>
            </div>

            <div className="col-6">
              <div className="productinfo-card card">
                <div className="productinfo-img-wrapper">
                    <img
                    src="https://qx-shooz.myshopify.com/cdn/shop/files/product-2_f21b4635-7aa2-414f-b44c-6ce8171394ed.jpg?v=1731310979&width=360"
                    className="card-img-top"
                    alt="product"
                    />
                </div>
                    <div className="card-body">
                        <h6 className="productinfo-card-title">
                            Chunky Platform Sandals
                        </h6>
                        <p className="productinfo-price">
                            $25.00{" "}
                            <span className="text-muted text-decoration-line-through">
                            $32.00
                            </span>
                        </p>
                        <button className="btn btn-link productinfo-addcart">
                            + Add to Cart
                        </button>
                    </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductInfo;

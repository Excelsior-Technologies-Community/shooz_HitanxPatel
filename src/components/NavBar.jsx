import React from "react";
import "./NavBar.css";

const Navbar = () => {
    return (
    <>
        <div className="navbar">

            <div className="logo">
            <img 
                src="https://qx-shooz.myshopify.com/cdn/shop/files/logo.png?v=1731409697&width=250" 
                alt="Shooz Logo" 
            />
            </div>

            <ul className="nav-links">
                <li className="active">Home</li>
                <li className="shop-menu">Shop <i className="fas fa-chevron-down shop-menu__arrow"></i>

                    <div className="shop-menu__dropdown">

                        <div className="container-fluid">
                            <div className="row shop-menu__container">

                                <div className="col-lg-3 col-md-2 shop-menu__column">
                                    <h4>Layout</h4>
                                    <ul>
                                    <li>1.Filter Sidebar</li>
                                    <li>2.Filter Top</li>
                                    <li>3.Filter Drawer</li>
                                    <li>4.Without Filter</li>
                                    <li>5.Collection - 2 columns</li>
                                    <li>6.Collection - 3 columns</li>
                                    <li>7.Collection - 4 columns</li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-2 shop-menu__column">
                                    <h4>Features</h4>
                                    <ul>
                                    <li>Banner Image</li>
                                    <li>Banner No Image</li>
                                    <li>Banner Split</li>
                                    <li>Collection list</li>
                                    <li>Sub Collection</li>
                                    <li>Pagination</li>
                                    <li>Infinity</li>
                                    <li>Load More</li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-2 shop-menu__column">
                                    <h4>Hover Style</h4>
                                    <ul>
                                    <li>Hover Style 1</li>
                                    <li>Hover Style 2</li>
                                    <li>Hover Style 3</li>
                                    <li>Hover Style 4</li>
                                    <li>Hover Style 5</li>
                                    <li>Hover Style 6</li>
                                    <li>Hover Style 7</li>
                                    <li>Hover Style 8</li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-6 shop-menu__images">

                                    <div className="shop-menu__card">
                                    <div className="img-box">
                                        <img src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=360" />
                                    </div>
                                    <h5>Athletic Footwear</h5>
                                    <p>8 products</p>
                                    </div>

                                    <div className="shop-menu__card">
                                    <div className="img-box">
                                        <img src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-4.png?v=1731657987&width=360" />
                                    </div>
                                    <h5>Boots for Every Occasion</h5>
                                    <p>8 products</p>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </li>
                <li className="product-menu">
                    Product <i className="fas fa-chevron-down arrow"></i>

                    <div className="product-menu__dropdown">
                        <div className="container">
                        <div className="row">

                            <div className="col-lg-2 product-menu__column">
                            <h4>Product Layouts</h4>
                            <ul>
                                <li>Thumbnails - bottom</li>
                                <li>Thumbnails - left</li>
                                <li>Thumbnails - right</li>
                                <li>Without Thumbnails</li>
                                <li>List - stacked</li>
                                <li>List - grid</li>
                                <li>Collage - style 1</li>
                                <li>Collage - style 2</li>
                            </ul>
                            </div>

                            <div className="col-lg-2 product-menu__column">
                            <h4>Product Type</h4>
                            <ul>
                                <li>Simple Product</li>
                                <li>Variable Product</li>
                                <li>With Video</li>
                                <li>Sold Out - Coming</li>
                            </ul>
                            </div>

                            <div className="col-lg-2 product-menu__column">
                            <h4>List Featured 1</h4>
                            <ul>
                                <li>Sticky ATC</li>
                                <li>Frequently Bought Together</li>
                                <li>Count Down</li>
                                <li>Cross Selling</li>
                                <li>Upsell Popup</li>
                                <li>Low Stock Alert</li>
                                <li>Pickup Store</li>
                            </ul>
                            </div>

                            <div className="col-lg-2 product-menu__column">
                                <h4>List Featured 2</h4>
                                <ul>
                                <li>Dropdown Variant</li>
                                <li>Swatch Variant Color</li>
                                <li>Swatch Variant Image</li>
                                <li>Variant Image Square</li>
                                <li>Size Guide</li>
                                <li>Description Accordion</li>
                                <li>Description Tab Center</li>
                                </ul>
                            </div>

                            <div className="col-lg-4 product-menu__images">
                            <div className="product-menu__card">
                                <div className="img-box">
                                    <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=360" />
                                </div>
                                <h5>$25.00</h5>
                                <p>Waterproof Hiking Boots</p>
                                <span className="product-menu__brand">TrailGear</span>

                                <div className="product-hover">
                                    <div className="line"></div>

                                    <div className="hover-actions">
                                        <span className="add-cart">
                                            <i className="fas fa-shopping-cart"></i> ADD TO CART
                                        </span>

                                        <div className="icons">
                                            <i className="far fa-eye"></i>
                                            <i className="far fa-heart"></i>
                                            <i className="fas fa-random"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>

                        </div>
                        </div>
                    </div>
                </li>
                <li className="blog-menu">
                    Blog <i className="fas fa-chevron-down arrow"></i>

                    <div className="blog-menu__dropdown">
                        <div className="container">
                        <div className="row">

                            <div className="col-lg-3 blog-menu__column">
                            <h4>List Layout</h4>
                            <ul>
                                <li>List Left Sidebar</li>
                                <li>List Right Sidebar</li>
                                <li>List Item Basic</li>
                                <li>List Item Overlay</li>
                                <li>List Item Box</li>
                                <li>List Item Classic</li>
                                <li>List Item Classic Box</li>
                            </ul>
                            </div>

                            <div className="col-lg-3 blog-menu__column">
                            <h4>Grid Layout</h4>
                            <ul>
                                <li>Grid Left Sidebar</li>
                                <li>Grid Right Sidebar</li>
                                <li>Grid Item Basic</li>
                                <li>Grid Item Overlay</li>
                                <li>Grid Item Box</li>
                                <li>Grid Item Classic</li>
                            </ul>
                            </div>

                            <div className="col-lg-3 blog-menu__column">
                            <h4>Article</h4>
                            <ul>
                                <li>Title in image</li>
                                <li>Title after image</li>
                                <li>Title before image</li>
                                <li>Left Sidebar</li>
                                <li>Right Sidebar</li>
                                <li>Title Center</li>
                                <li>Article Video</li>
                            </ul>
                            </div>

                            <div className="col-lg-3 blog-menu__banner">
                            <div className="banner-box">
                                <img src="https://qx-shooz.myshopify.com/cdn/shop/files/filler1.png?v=1731501348&width=540" />
                                    <div className="banner-content">
                                    <h5>Enjoy a 50% Price Slash</h5>
                                    <p>Revamp Your Wardrobe at Jaw-Dropping Prices.</p>
                                    <span className="shop-link">SHOP NOW</span>
                                    </div>
                            </div>
                            </div>

                        </div>
                        </div>
                    </div>
                </li>
                <li className="pages-menu">
                    Pages <i className="fas fa-chevron-down arrow"></i>

                    <ul className="pages-dropdown">
                        <li>About Us 1</li>
                        <li>About Us 2</li>
                        <li>About Us 3</li>
                        <li>Contact</li>
                        <li>Faqs</li>
                        <li>Lookbook</li>
                        <li>Size Guide</li>
                        <li>Wishlist</li>
                    </ul>
                </li>
                <li className="buy-now">Buy Now <span className="sale-badge">Sale</span>
                </li>
            </ul>

            <div className="nav-icons">
                <i className="fas fa-search"></i>
                <i className="far fa-user"></i>
                <i className="far fa-heart">
                <span className="badge">0</span>
                </i>
                <i className="fas fa-shopping-bag">
                <span>(0)</span>
                </i>
            </div>

        </div>

        <div className="mob-navbar">

            <div className="mobile-left">
                <i 
                className="fas fa-bars"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileMenu"
                />
                <i className="fas fa-search"></i>
            </div>

            <div className="logo">
                <img src="https://qx-shooz.myshopify.com/cdn/shop/files/logo.png?v=1731409697&width=250" />
            </div>

            <div className="mobile-right">
                <i className="far fa-user"></i>
                <i className="far fa-heart">
                <span className="badge">0</span>
                </i>
                <i className="fas fa-shopping-bag">
                <span>(0)</span>
                </i>
            </div>

        </div>

        <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="mobileMenu"
            >
            <div className="offcanvas-header">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>

            <div className="offcanvas-body">

                <ul className="mobile-menu">

                <li>Home</li>

                <li className="menu-item">
                    Shop <span>+</span>
                </li>

                <li className="menu-item">
                    Product <span>+</span>
                </li>

                <li className="menu-item">
                    Blog <span>+</span>
                </li>

                <li className="menu-item">
                    Pages <span>+</span>
                </li>

                <li>
                    Buy Now <span className="sale-badge">Sale</span>
                </li>

                <hr />

                <li className="login">Login / Register</li>

                <hr />

                <li className="footer-row">
                    AUD $ <span>⌄</span>
                </li>

                <li className="footer-row">
                    English <span>⌄</span>
                </li>

                </ul>

            </div>
        </div>
    </>
    );
};

export default Navbar;
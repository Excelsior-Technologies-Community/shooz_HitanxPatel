import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [shopOpen, setShopOpen] = useState(false);
    const [layoutOpen, setLayoutOpen] = useState(false);
    const [featureOpen, setFeatureOpen] = useState(false);
    const [hoverOpen, setHoverOpen] = useState(false);
    const [productOpen, setProductOpen] = useState(false);
    const [productLayoutOpen, setProductLayoutOpen] = useState(false);
    const [productTypeOpen, setProductTypeOpen] = useState(false);
    const [featured1Open, setFeatured1Open] = useState(false);
    const [featured2Open, setFeatured2Open] = useState(false);
    const [blogOpen, setBlogOpen] = useState(false);
    const [listLayoutOpen, setListLayoutOpen] = useState(false);
    const [gridLayoutOpen, setGridLayoutOpen] = useState(false);
    const [articleOpen, setArticleOpen] = useState(false);
    const [pagesOpen, setPagesOpen] = useState(false);
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
                <li className="active"><Link to="/">Home</Link></li>
                <li className="shop-menu"><Link to="/Shop">Shop</Link> <i className="fas fa-chevron-down shop-menu__arrow"></i>

                    <div className="shop-menu__dropdown">

                        <div className="container-fluid">
                            <div className="shop-menu__container">

                                <div className="col-lg-2 col-md-2 shop-menu__column">
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

                                <div className="col-lg-2 col-md-2 shop-menu__column">
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

                                <div className="col-lg-2 col-md-2 shop-menu__column">
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

                                <div className="col-lg-6 col-md-6 shop-menu__images">

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
                     <Link to="/Product">Product</Link><i className="fas fa-chevron-down arrow"></i>

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
                    <Link to="/Blog">Blog</Link> <i className="fas fa-chevron-down arrow"></i>

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
                        <li><Link to="/AboutUs">About Us 1</Link></li>
                        <li>About Us 2</li>
                        <li>About Us 3</li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/FAQ">Faqs</Link></li>
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
                <div className="icon-box">
                    <i className="far fa-heart"></i>
                    <span className="badge">0</span>
                </div>
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
            className="offcanvas offcanvas-start mobile-offcanvas"
            tabIndex="-1"
            id="mobileMenu"
            >
            <div className="offcanvas-header">
                <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                ></button>
            </div>

            <div className="offcanvas-body">

                <ul className="mobile-menu">

                <li className="menu-link">Home</li>

                <li>

                    <div
                        className="menu-link menu-item"
                        onClick={() => setShopOpen(!shopOpen)}
                    >
                        <span>Shop</span>
                        <span>{shopOpen ? "−" : "+"}</span>
                    </div>

                    {shopOpen && (
                        <div className="submenu">

                        <div
                            className="submenu-title"
                            onClick={() => setLayoutOpen(!layoutOpen)}
                        >
                            <span>Layout</span>
                            <span>{layoutOpen ? "−" : "+"}</span>
                        </div>

                        {layoutOpen && (
                            <ul>
                            <li>1. Filter Sidebar</li>
                            <li>2. Filter Top</li>
                            <li>3. Filter Drawer</li>
                            <li>4. Without Filter</li>
                            <li>5. Collection - 2 columns</li>
                            <li>6. Collection - 3 columns</li>
                            <li>7. Collection - 4 columns</li>
                            </ul>
                        )}

                        <div
                            className="submenu-title"
                            onClick={() => setFeatureOpen(!featureOpen)}
                        >
                            <span>Features</span>
                            <span>{featureOpen ? "−" : "+"}</span>
                        </div>

                        {featureOpen && (
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
                        )}

                        <div
                            className="submenu-title"
                            onClick={() => setHoverOpen(!hoverOpen)}
                        >
                            <span>Hover Style</span>
                            <span>{hoverOpen ? "−" : "+"}</span>
                        </div>

                        {hoverOpen && (
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
                        )}

                        </div>
                    )}

                </li>

                <li>

                    <div
                        className="menu-link menu-item"
                        onClick={() => setProductOpen(!productOpen)}
                    >
                        <span>Product</span>
                        <span>{productOpen ? "−" : "+"}</span>
                    </div>

                    {productOpen && (
                        <div className="submenu">

                        <div
                            className="submenu-title"
                            onClick={() => setProductLayoutOpen(!productLayoutOpen)}
                        >
                            <span>Product Layouts</span>
                            <span>{productLayoutOpen ? "−" : "+"}</span>
                        </div>

                        {productLayoutOpen && (
                            <ul>
                            <li>1. Thumbnails - bottom</li>
                            <li>2. Thumbnails - left</li>
                            <li>3. Thumbnails - right</li>
                            <li>4. Without Thumbnails</li>
                            <li>5. List - stacked</li>
                            <li>6. List - grid</li>
                            <li>7. Collage - style 1</li>
                            <li>8. Collage - style 2</li>
                            </ul>
                        )}

                        <div
                            className="submenu-title"
                            onClick={() => setProductTypeOpen(!productTypeOpen)}
                        >
                            <span>Product Type</span>
                            <span>{productTypeOpen ? "−" : "+"}</span>
                        </div>

                        {productTypeOpen && (
                            <ul>
                            <li>Simple Product</li>
                            <li>Variable Product</li>
                            <li>With Video</li>
                            <li>Sold Out - Coming</li>
                            </ul>
                        )}

                        <div
                            className="submenu-title"
                            onClick={() => setFeatured1Open(!featured1Open)}
                        >
                            <span>List Featured 1</span>
                            <span>{featured1Open ? "−" : "+"}</span>
                        </div>

                        {featured1Open && (
                            <ul>
                            <li>Sticky ATC</li>
                            <li>Frequently Bought Together</li>
                            <li>Count Down</li>
                            <li>Cross Selling</li>
                            <li>Upsell Popup</li>
                            <li>Low Stock Alert</li>
                            <li>Pickup Store</li>
                            </ul>
                        )}

                        <div
                            className="submenu-title"
                            onClick={() => setFeatured2Open(!featured2Open)}
                        >
                            <span>List Featured 2</span>
                            <span>{featured2Open ? "−" : "+"}</span>
                        </div>

                        {featured2Open && (
                            <ul>
                            <li>Dropdown Variant</li>
                            <li>Swatch Variant Color</li>
                            <li>Swatch Variant Image</li>
                            <li>Variant Image Square</li>
                            <li>Size Guide</li>
                            <li>Description Accordion</li>
                            <li>Description Tab Center</li>
                            </ul>
                        )}

                        </div>
                    )}

                </li>

                <li>

                    <div
                        className="menu-link menu-item"
                        onClick={() => setBlogOpen(!blogOpen)}
                    >
                        <span>Blog</span>
                        <span>{blogOpen ? "−" : "+"}</span>
                    </div>

                    {blogOpen && (
                        <div className="submenu">

                        <div
                            className="submenu-title"
                            onClick={() => setListLayoutOpen(!listLayoutOpen)}
                        >
                            <span>List Layout</span>
                            <span>{listLayoutOpen ? "−" : "+"}</span>
                        </div>

                        {listLayoutOpen && (
                            <ul>
                            <li>List Left Sidebar</li>
                            <li>List Right Sidebar</li>
                            <li>List Item Basic</li>
                            <li>List Item Overlay</li>
                            <li>List Item Box</li>
                            <li>List Item Classic</li>
                            <li>List Item Classic Box</li>
                            </ul>
                        )}

                        <div
                            className="submenu-title"
                            onClick={() => setGridLayoutOpen(!gridLayoutOpen)}
                        >
                            <span>Grid Layout</span>
                            <span>{gridLayoutOpen ? "−" : "+"}</span>
                        </div>

                        {gridLayoutOpen && (
                            <ul>
                            <li>Grid Left Sidebar</li>
                            <li>Grid Right Sidebar</li>
                            <li>Grid Item Basic</li>
                            <li>Grid Item Overlay</li>
                            <li>Grid Item Box</li>
                            <li>Grid Item Classic</li>
                            </ul>
                        )}

                        <div
                            className="submenu-title"
                            onClick={() => setArticleOpen(!articleOpen)}
                        >
                            <span>Article</span>
                            <span>{articleOpen ? "−" : "+"}</span>
                        </div>

                        {articleOpen && (
                            <ul>
                            <li>Title in image</li>
                            <li>Title after image</li>
                            <li>Title before image</li>
                            <li>Left Sidebar</li>
                            <li>Right Sidebar</li>
                            <li>Title Center</li>
                            <li>Article Video</li>
                            </ul>
                        )}

                        </div>
                    )}

                </li>

                <li>

                    <div
                        className="menu-link menu-item"
                        onClick={() => setPagesOpen(!pagesOpen)}
                    >
                        <span>Pages</span>
                        <span>{pagesOpen ? "−" : "+"}</span>
                    </div>

                    {pagesOpen && (
                        <ul className="submenu simple-submenu">
                        <li>About Us 1</li>
                        <li>About Us 2</li>
                        <li>About Us 3</li>
                        <li>Contact</li>
                        <li>Faqs</li>
                        <li>Lookbook</li>
                        <li>Size Guide</li>
                        <li>Wishlist</li>
                        </ul>
                    )}

                </li>

                <li className="menu-link buy-now-mobile">
                    Buy Now <span className="sale-badge-mobile">Sale</span>
                </li>

                <li className="login">Login / Register</li>

                <li className="footer-row">

                    <div className="footer-item">
                        <span>AUD $</span>
                        <span className="arrow">⌄</span>
                    </div>

                    <div className="footer-item">
                        <span>English</span>
                        <span className="arrow">⌄</span>
                    </div>

                </li>

                </ul>

            </div>
        </div>
    </>
    );
};

export default Navbar;
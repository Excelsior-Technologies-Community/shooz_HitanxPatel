import React from "react";
import "./NavBar.css";

const Navbar = () => {
    return (
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

                    <div className="shop-menu__container">

                        <div className="shop-menu__column">
                            <h4>Layout</h4>
                            <ul>
                            <li>Filter Sidebar</li>
                            <li>Filter Top</li>
                            <li>Filter Drawer</li>
                            <li>Without Filter</li>
                            <li>Collection - 2 columns</li>
                            <li>Collection - 3 columns</li>
                            <li>Collection - 4 columns</li>
                            </ul>
                        </div>

                        <div className="shop-menu__column">
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

                        <div className="shop-menu__column">
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

                        <div className="shop-menu__images">

                            <div className="shop-menu__card">
                            <img src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=360" />
                            <h5>Athletic Footwear</h5>
                            <p>8 products</p>
                            </div>

                            <div className="shop-menu__card">
                            <img src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-4.png?v=1731657987&width=360" />
                            <h5>Boots for Every Occasion</h5>
                            <p>8 products</p>
                            </div>

                        </div>

                    </div>
                </div>

            </li>
            <li>Product <i className="fas fa-chevron-down arrow"></i></li>
            <li>Blog <i className="fas fa-chevron-down arrow"></i></li>
            <li>Pages <i className="fas fa-chevron-down arrow"></i></li>
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
    );
};

export default Navbar;
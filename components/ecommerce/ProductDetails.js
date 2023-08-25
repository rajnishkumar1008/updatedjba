import { useState } from "react";
// import {
//     decreaseQuantity,
//     increaseQuantity
// } from "../../redux/action/cart";
// import { addToCompare } from "../../redux/action/compareAction";
// import { addToWishlist } from "../../redux/action/wishlistAction";
// import ProductTab from "../elements/ProductTab";
// import RelatedSlider from "../sliders/Related";
import ThumbSlider from "../sliders/Thumb";

const ProductDetails = ({
    // product,
    // cartItems,
    // addToCompare,
    // addToCart,
    // addToWishlist,
    // increaseQuantity,
    // decreaseQuantity,
    // quickView,
}) => {
    // const [quantity, setQuantity] = useState(1);
    

    // const handleCart = (product) => {
    //     addToCart(product);
    //     toast("Product added to Cart !");
    // };

    // const handleCompare = (product) => {
    //     addToCompare(product);
    //     toast("Added to Compare list !");
    // };

    // const handleWishlist = (product) => {
    //     addToWishlist(product);
    //     toast("Added to Wishlist !");
    // };

    // const inCart = cartItems.find((cartItem) => cartItem.id === product.id);

    // console.log(inCart);

    return (
        <>
            <section className="mt-50 mb-50">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-xl-10 col-lg-12 m-auto">
                            <div className="product-detail accordion-detail">
                                <div className="row mb-50  mt-30">
                                    <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                                        <div className="detail-gallery">
                                            <span className="zoom-icon">
                                                <i className="fi-rs-search"></i>
                                            </span>

                                            <div className="product-image-slider">
                                                <ThumbSlider />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <div className="detail-info  pr-30 pl-30">
                                            <span className="stock-status out-stock"> Sale On </span>
                                            <h2 className="title-detail">Melee Diamonds</h2>
                                            {/* <div className="product-detail-rating">
                                                <div className="product-rate-cover text-end">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: "90%" }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (32 reviews)</span>
                                                </div>
                                            </div> */}
                                            <div className="clearfix product-price-cover">
                                                <div className="product-price primary-color float-left">
                                                    <span className="current-price  text-brand">$503</span> 
                                                    <span>
                                                        <span className="save-price font-md color3 ml-15">5% Off</span> 
                                                        <span className="old-price font-md ml-15"></span>
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="short-desc mb-30">
                                                <p className="font-lg"></p>
                                            </div>
                                            <div className="attr-detail attr-color mb-15">
                                                <strong className="mr-10">Color</strong>
                                                <ul className="list-filter color-filter">
                                                   
                                                        <li>
                                                            <a href="#">
                                                            <span className="product-color-red"></span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                            <span className="product-color-green"></span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                            <span className="product-color-green"></span>
                                                            </a>
                                                        </li>
                                               
                                                </ul>
                                            </div>
                                            <div className="attr-detail attr-size">
                                                <strong className="mr-10">Size</strong>
                                                <ul className="list-filter size-filter font-small">
                                                    <li className="active">
                                                        <a>M</a>
                                                    </li>
                                                    <li>
                                                        <a>L</a>
                                                    </li>
                                                    <li>
                                                        <a>XL</a>
                                                    </li>
                                                    <li>
                                                        <a>XXL</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bt-1 border-color-1 mt-30 mb-30"></div>
                                            <div className="detail-extralink">
                                                <div className="detail-qty border radius">
                                                    <a className="qty-down">
                                                    <i className="bi bi-chevron-down"></i>
                                                    </a>
                                                    <span className="qty-val">1</span>
                                                    <a className="qty-up">
                                                    <i className="bi bi-chevron-up"></i>
                                                    </a>
                                                </div>
                                                <div className="product-extra-link2">
                                                    <button
                                                       
                                                        className="button button-add-to-cart"
                                                    >
                                                        Add to cart
                                                    </button>
                                                    <a aria-label="Add To Wishlist" className="action-btn hover-up" >
                                                    <i className="bi bi-heart-fill"></i>
                                                    </a>
                                                    <a aria-label="Compare" className="action-btn hover-up" >
                                                    <i className="bi bi-shuffle"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <ul className="product-meta font-xs color-grey mt-50">
                                                <li className="mb-5">
                                                    SKU:
                                                    <a href="#">FWM15VKT</a>
                                                </li>
                                                <li className="mb-5">
                                                    Tags:
                                                    <a href="#" rel="tag" className="me-1">
                                                        Cloth,
                                                    </a>
                                                </li>
                                                <li>
                                                    Availability:
                                                    <span className="in-stock text-success ml-5"> Items In Stock</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                   
                            
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

// const mapStateToProps = (state) => ({
//     cartItems: state.cart,
// });

// const mapDispatchToProps = {
//     addToCompare,
//     addToWishlist,
//     addToCart,
//     increaseQuantity,
//     decreaseQuantity,
// };

export default ProductDetails;

import Link from "next/link";
import React, { useState } from "react";
const SingleProductShop = ({productName,productSlug,sku,productPrice,productFrontImage,productBackImage}) => {
  return (
    <>
      <div className="product-cart-wrap mb-30">
        <div className="product-img-action-wrap">
          <div className="product-img product-img-zoom">
            <Link href={`/products/${productSlug}`}>
              
                <img
                  className="default-img"
                  src={productFrontImage}
                  alt=""
                />
                <img
                  className="hover-img"
                  src={productBackImage}
                  alt=""
                />
               
            </Link>
          </div>
        </div>
        <div className="jba-action-cart">
          <div className="product-rate-cover">
          <div className="d-flex">
            <div className="ratings">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
            </div>
        </div>
          
          </div>
          <div className="jba-product-action">
            
            <a aria-label="Add To Wishlist" className="action-btn hover-up">
              <i className="bi bi-heart-fill"></i>
            </a>
            
          </div>
        </div>
        <div className="product-content-wrap">
          <div className="product-category">
            <Link href="/products/ring/">
              
            </Link>
          </div>
          <h2>
            <Link href={`/products/${productSlug}`}>
              {productName.substring(0,36)} 
            </Link>
          </h2>

          <div>
            <span className="font-small text-muted">SKU:{sku}</span>
          </div>

          <div className="product-card-bottom">
            <div className="product-price">
              <span>₹ {productPrice}</span>
              {/* <span className="old-price">₹ </span> */}
            </div>
            {/* <div className="add-cart">
              <a className="add">
                <i className="bi bi-cart4"></i> Add
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductShop;

import Link from "next/link";
import React, { useState, useRef} from "react";
 
const RelatedProductList = ({productName,productSlug,productprice,sku,frontImg,backImg}) => {  
    const ref=useRef();  
  return (
    
    <>

<div>
      
    </div>
      <div className="product-cart-wrap mb-30">
        <div className="product-img-action-wrap">
       
          <div className="product-img product-img-zoom">
            <a href={`/products/${productSlug}`}>
                <img
                  className="default-img"
                  src={frontImg}
                  alt=""
                />
                <img
                  className="hover-img"
                  src={backImg}
                  alt=""
                />
              </a>
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
          </div>
          <h2>
            <a href={`/products/${productSlug}`}>
               {productName} 
            </a>
          </h2>

          <div>
           
            <span className="font-small text-muted">SKU:{sku}</span>
          </div>
            
          <div className="product-card-bottom">
            <div className="product-price">
              <span>₹ {productprice}</span>
              
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

export default RelatedProductList;

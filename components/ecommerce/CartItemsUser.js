import Link from "next/link";
import React from "react";
const CartItemsUser = () => {
  return (
    <div>
      <div className="jba-cart-product">
        <div className="p-pic">
          <Link href="/products/abc">
            <a>
              <img src="/img/shop/prodct-dummy-1.png" alt="img" />
            </a>
          </Link>
        </div>
        <div className="product-dec">
          <h3>
            <Link href="/products/abc">
              <a>Pearl Diamond Hoops</a>
            </Link>
          </h3>
          <span className="sku">SKU : 54FG3FDH31GFH</span>
          <span className="p-price">
            15,999 <span className="old-p">₹ 19,500</span>
          </span>
          <div className="p-size">
            <div>
              <span className="size-head">Size:</span>
            </div>
            <div className="fomr-sec">
              <select className="form-select">
                <option selected>16</option>
                <option value="1">14</option>
                <option value="2">18</option>
                <option value="3">12</option>
              </select>
            </div>
          </div>

          
        </div>
        <div className="deliver-date deliver-date-s">
            <img src="/img/themepic/icons/package.png" alt="package" /> <span>Delivery by- 26th Aug</span>
        </div>
        <div className="track-user-or">
            <span><Link href="/myaccounts/order/ring"><a>Item Details</a></Link></span>
        </div>
      </div>
    </div>
  );
};

export default CartItemsUser;

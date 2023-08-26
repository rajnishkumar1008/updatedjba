import React from "react";

const CartPayment = () => {
  return (
    <>
      <div className="cart-payment">
        <h3>Select Payment Method</h3>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            Credit Card
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Debit Card
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="option3"
          />
          <label className="form-check-label" htmlFor="inlineRadio3">
            UPI
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio4"
            value="option4"
          />
          <label className="form-check-label" htmlFor="inlineRadio4">
            Net Banking
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio5"
            value="option5"
          />
          <label className="form-check-label" htmlFor="inlineRadio5">
            Cash On Delivery
          </label>
        </div>
        <div className="check-out mt-50 price-btn">
            <button type="submit" className="btn btn-primary">
            Pay ₹ 15,899
            </button>
          </div>
      </div>
    </>
  );
};

export default CartPayment;

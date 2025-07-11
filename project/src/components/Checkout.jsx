// File: src/components/Checkout.jsx
//sk_test_51RjfrSC6gkdZlLEBuRAkuCu7ovYqsixLdWykazdGzLvsozC2jdX1QTOEPfFDADSMja1P90L5OzXnnVSmHqTlODnf00Krx4idop//

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import "./Checkout.css"; 

// Load your Stripe public test key
const stripePromise = loadStripe("pk_test_51RjfrSC6gkdZlLEBUQI4vTx8vCfMJl3CfusmtY2AmHHOM0DRNoDiX1lak5uPMRTmrfvG3fIiwV757H6x9OiDwC9D00aihYNxBk");

const Checkout = () => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1Rjg1TC6gkdZlLEBSg73dvp1", 
          quantity: 1,
        },
      ],
      mode: "subscription",
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/`,
    });

    if (error) {
      console.error("Stripe checkout error:", error.message);
    }
  };

  return (
    <div className="checkout-container">
       
      <h1>TheTop36 Bundle - $7</h1>
      <p>TheTop36.com is a digital-vault store that sells curated $7 bundles of public-domain content. Each purchase automatically qualifies the buyer for a promotional 1-in-100 draw that is run each 45-day cycle.
 </p>
      <button onClick={handleCheckout} className="checkout-btn">
        Pay $7
      </button>
    </div>
  );
};

export default Checkout;


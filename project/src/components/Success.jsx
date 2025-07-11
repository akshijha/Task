import React from "react";
import "./Success.css";

const Success = () => {
  return (
    <div className="success-container">
      <h2>✅ Payment Successful!</h2>
      <p>Thanks for your purchase. You’ve been entered into the 1-in-100 raffle draw.</p>
      <a href="/dashboard">Go to Dashboard</a>
    </div>
  );
};

export default Success;

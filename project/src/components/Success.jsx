import React, { useEffect } from "react";
import "./Success.css";

const Success = () => {
  useEffect(() => {
    const sendPurchaseStatus = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/purchase`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "success", user: "meena" }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("✅ /api/purchase response:", data);
      } catch (err) {
        console.error("❌ /api/purchase error:", err.message);
        // Optional: silently fail or notify user if needed
      }
    };

    sendPurchaseStatus();
  }, []);

  return (
    <div className="success-container">
      <h2>✅ Payment Successful!</h2>
      <p>Thanks for your purchase. You’ve been entered into the 1-in-100 raffle draw.</p>
      <a href="/dashboard">Go to Dashboard</a>
    </div>
  );
};

export default Success;


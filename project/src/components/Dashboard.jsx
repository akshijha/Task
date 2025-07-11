import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [referrals, setReferrals] = useState(5);
  const [purchases, setPurchases] = useState(3);

  return (
    <div className="dashboard-container">
      <h2>Your Credits</h2>
      <p>Total Credits: {7 + referrals + purchases}</p>

      <h3>Raffle Draw</h3>
      <p>Multiplier: x1.5 on referrals this cycle</p>
      <p>Next Draw in: 20 days</p>

      <h3>Referral Link</h3>
      <input type="text" readOnly value="https://thetop36.com/ref/meena" />
      <button onClick={() => navigator.clipboard.writeText("https://thetop36.com/ref/meena")}>
        Copy Link
      </button>

      <div className="referral-stats">
        <p>Total Referred: {referrals}</p>
        <p>Purchases Made: {purchases}</p>
      </div>

      <div className="share-cta">
        <button>
          <i className="fab fa-whatsapp" style={{ marginRight: "8px" }}></i>
          Share via WhatsApp
        </button>
        <button>
          <i className="fas fa-envelope" style={{ marginRight: "8px" }}></i>
          Share via Email
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

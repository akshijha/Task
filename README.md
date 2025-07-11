# 🗂️ TheTop36 – Public Domain Digital Vault

**TheTop36.com** is a digital-vault store that sells curated $7 bundles of public-domain content. Each purchase qualifies the buyer for a promotional 1-in-100 draw, held every 45 days.

---

## 🔗 Live Demo

- 🌐 **Frontend**: https://task-nu-ten-25.vercel.app/
- 🖥️ **Backend API**:https://task-rio1.onrender.com

---

## 📦 Tech Stack

- **Frontend**: React + Vite + CSS
- **Backend**: Node.js + Express
- **Payment**: Stripe Checkout (Test Mode)
- **Deployment**: Vercel (Frontend) & Render (Backend)

---

## ✅ Features

### 🧾 Module C: Stripe Final Payment Integration
- Fully functional Stripe Checkout in test mode
- Accepts $7 product payment via hosted Stripe page
- Redirects to success page on payment
- Calls `/api/purchase` mock endpoint
- Error handling and user feedback

### 📊 Module D: Referral Dashboard
- Displays total credits = base + bonus + referrals
- Shows raffle countdown & referral multipliers
- Copies referral link to clipboard
- Displays referral & purchase stats
- Share buttons (WhatsApp / Email – non-functional)

---

## 🎨 Brand Guidelines Used

| Variable         | Value                          |
|------------------|--------------------------------|
| Primary Color    | `#111D5E` (Deep Navy)          |
| Accent Color     | `#FF7A00` (Orange)             |
| Background       | `#F1F5FB`                      |
| Font             | Inter, Helvetica Neue, Arial   |
| Border Radius    | `8px`                          |
| Spacing Scale    | 4pt grid (4, 8, 16, 24 px)     |
| Logo             | `/assets/logo.png`             |

---

## 🧪 Test Card Details (Stripe)

Use this in checkout to simulate payment:

- **Card Number**: `4242 4242 4242 4242`
- **Expiry**: Any future date (e.g., `12/34`)
- **CVV**: Any 3 digits (e.g., `123`)
- **ZIP**: Any (e.g., `10001`)

---

## 🛠️ Setup Instructions (Local)

### 1. Clone Repo

```bash
git clone https://github.com/your-username/project.git
cd project
npm run dev
for backend
cd backend
node server.js

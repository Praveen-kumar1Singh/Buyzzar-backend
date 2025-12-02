# 🛒 Buyzzar Backend

Buyzzar is a full-stack e-commerce application with Print-On-Demand (POD) support.  
This repository contains the **backend API**, built with **Node.js, Express, MongoDB, JWT authentication, Razorpay payments, and Qikink POD integration**.

Deployed on: **Render**  
Frontend repo: (add link here)  
Frontend live: https://buyzzar-frontend-sigma.vercel.app/

---

## 🚀 Features

- User authentication (signup / login / logout) with **JWT + HttpOnly cookies**
- Protected routes using custom **`authToken` middleware**
- Role-based access (User / Admin)
- Product management:
  - Upload / update products (Admin only)
  - Category-wise product listing
  - Search & filter products
- Shopping cart APIs:
  - Add to cart
  - Update quantity
  - Remove item
  - View user cart
  - Cart item count
- Order management:
  - Create order
  - Fetch user orders
  - Qikink sync endpoint for POD order integration
- **Razorpay** payment integration
- **Cloudinary** used in product image flows (from frontend)

---

## 🏗️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB + Mongoose
- **Auth:** JWT + HttpOnly Cookie
- **Payments:** Razorpay
- **POD Integration:** Qikink
- **Image hosting:** Cloudinary
- **Deployment:** Render

---

## 📁 Project Structure

```bash
buyzzar-backend/
├─ config/
│  └─ db.js                # MongoDB connection
├─ controller/
│  ├─ user/
│  │  ├─ userSignUp.js
│  │  ├─ userSignIn.js
│  │  ├─ userDetails.js
│  │  ├─ userLogout.js
│  │  ├─ allUsers.js
│  │  ├─ updateUser.js
│  │  ├─ addToCartController.js
│  │  ├─ countAddToCartProduct.js
│  │  ├─ addToCartViewProduct.js
│  │  ├─ updateAddToCartProduct.js
│  │  └─ deleteAddToCartProduct.js
│  ├─ product/
│  │  ├─ uploadProduct.js
│  │  ├─ getProduct.js
│  │  ├─ updateProduct.js
│  │  ├─ getCategoryProductOne.js
│  │  ├─ getCategoryWiseProduct.js
│  │  ├─ getProductDetails.js
│  │  ├─ searchProduct.js
│  │  └─ filterProduct.js
│  ├─ order/
│  │  └─ qikinkSync.js
│  └─ ...
├─ middleware/
│  └─ authToken.js         # verifies JWT from cookie
├─ models/
│  ├─ userModel.js
│  ├─ productModel.js
│  └─ ...
├─ routes/
│  ├─ index.js             # /api routes entry
│  ├─ order.js
│  ├─ payment.js
│  └─ ...
├─ api/
│  └─ razorpay/
│     └─ create-order.js
├─ .env
├─ index.js                # app entrypoint (Express server)
└─ package.json

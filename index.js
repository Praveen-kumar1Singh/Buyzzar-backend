const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

// 👇 Yahan apna frontend URL env se ya direct
const FRONTEND_URL = process.env.FRONTEND_URL || "https://buyzzar-frontend-sigma.vercel.app";

// -------------------------
// ✅ CORS setup for Vercel + Render
// -------------------------
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// Preflight handle (OPTIONS)
app.options("*", cors({
  origin: FRONTEND_URL,
  credentials: true,
}));

// -------------------------
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// 🔁 Extra safety headers (optional but good)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", FRONTEND_URL);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// -------------------------
app.use("/api", router);

const PORT = process.env.PORT || 8080;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("🚀 Server is running on port " + PORT);
  });
});

// optional: agar kabhi tests ke liye chahiye
module.exports = app;


// const express = require('express');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// require('dotenv').config();
// const connectDB = require('./config/db');
// const router = require('./routes');

// const app = express();

// app.use(cors({
//     origin: true,
//     credentials: true,
// }));

// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ extended: true, limit: '10mb' }));
// app.use(cookieParser());

// app.use("/api", router);

// const PORT = process.env.PORT || 8080;

// connectDB().then(() => {
//     app.listen(PORT, () => {
//         console.log("🚀 Server is running on port " + PORT);
//     });
// });

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const orderRouter = require("./routes/orderRouter");
const menuRouter = require("./routes/menuRouter");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json("Holaa");
});

// Routes
app.use("/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/menu", menuRouter);

// Server
app.listen(PORT, () => {
  console.log("Escuchando");
});

// MONGODB CONNECTION
const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Conectado a DB");
  }
);

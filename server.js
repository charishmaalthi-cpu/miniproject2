const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/warehouseDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const warehouseRoutes = require("./routes/warehouseroutes");

app.use("/warehouse", warehouseRoutes);

app.get("/", (req, res) => {
  res.send("Warehouse Management API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());

const port = process.env.PORT;
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to the MongoDB!"));

const UserRouter = require("./routes/UserRouter");
const ProductRouter = require("./routes/ProductRouter");

app.use("/auth", UserRouter);
app.use("/products", ProductRouter);

app.listen(port, () => {
    console.log(`Server started and running on port: ${port}!...`);
});
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");

const port = 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Atlas Connected 🔥");

    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });

  } catch (err) {
    console.log("DB connection failed ❌", err);
  }
}

main();

import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.send("API health is ok ok");
});

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});

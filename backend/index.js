import express from "express";
import cors from "cors";
import signup from "./controllers/auth.js";
import posts from "./controllers/posts.js";
import mongooseHandle from "./db/index.js";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/posts", posts);
app.post("/signup", signup);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "Something went wrong" });
});

app.listen(3001, async () => {
  console.log("Server running on port 3001");
  await mongooseHandle();
});

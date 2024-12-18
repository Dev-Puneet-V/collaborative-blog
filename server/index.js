import express from "express";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config({
  path: "./.env",
});

// Database Connection
connectDB();

// Serve static files from the "dist" folder
app.use(express.static(path.join(__dirname, "dist")));

// For any other routes, send the index.html file from dist
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

app.use((req, res, next) => {
  return res.status(404).send({ message: "Route" + req.url + " Not found." });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

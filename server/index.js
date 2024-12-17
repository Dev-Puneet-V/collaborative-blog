import express from "express";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(import.meta.url, __filename, __dirname);

// Serve static files from the "dist" folder
app.use(express.static(path.join(__dirname, "dist")));

// For any other routes, send the index.html file from dist
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

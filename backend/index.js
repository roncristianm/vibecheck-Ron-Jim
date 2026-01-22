/**
 * VibeCheck API (CPE 411L)
 *
 * This server:
 * - runs on your computer (localhost)
 * - listens on a port (default: 3000)
 * - responds to browser requests (endpoints) using JSON
 */

const express = require("express");
const cors = require("cors");

// Import route modules
const fortuneRoute = require("./routes/fortune");
const jokeRoute = require("./routes/joke");
const vibeRoute = require("./routes/vibe");
const smashRoute = require("./routes/smash");
const secretRoute = require("./routes/secret");

const app = express();
const PORT = 3000;

// CORS lets your frontend page call your backend API.
app.use(cors());

// This allows Express to read JSON bodies (used for POST requests).
app.use(express.json());

// Register API routes
app.use("/api/fortune", fortuneRoute);
app.use("/api/joke", jokeRoute);
app.use("/api/vibe", vibeRoute);
app.use("/api/smash", smashRoute);
app.use("/api/secret", secretRoute);

// Start server
app.listen(PORT, () => {
  console.log(`VibeCheck API running at http://localhost:${PORT}`);
});

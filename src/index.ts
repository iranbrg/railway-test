import express from "express";
import axios from "axios";
import "dotenv/config";
var cron = require('node-cron');

const app = express();

const PORT = process.env.PORT ?? 3000;
const API_URL = process.env.API_URL ?? `http://localhost:${PORT}`;

cron.schedule('*/2 * * * *', () => {
  console.log('running a task every 2 minutes');
});

app.get("/", async (req, res) => {
    const response = await axios.get("https://api.github.com/users/iranbrg");
    res.status(200).json({ githubData: response.data });
})

app.get("/ping", async (req, res) => {
    res.status(200).json({ message: "pong" });
})

app.listen(PORT, () => console.log(`Server's running at ${API_URL}`));

const Tiktok = require("@tobyg74/tiktok-api-dl");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
let items = [
  { id: 1, name: "Item A" },
  { id: 2, name: "Item B" },
  { id: 3, name: "Item C" },
  { id: 4, name: "Item D" },
];

app.use(express.json());

app.get("/api/items", (req, res) => {
  res.status(200).json(items);
});

app.post("/download", async (req, res) => {
  const { url } = req.body;
  console.log("RUN");
  console.log("url: ", url);

  if (!url) {
    return res
      .status(400)
      .json({ error: "Please provide a TikTok video URL." });
  }

  try {
    const result = await Tiktok.Downloader(url, { version: "v3" });

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Error downloading video:", error);

    res.status(500).json({
      success: false,
      error: "Failed to download the video.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

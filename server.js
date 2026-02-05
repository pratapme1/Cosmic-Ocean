import express from "express";
import fs from "fs";
import { marked } from "marked";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const md = fs.readFileSync("index.md", "utf8");
  const html = marked.parse(md);

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(`<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Privacy Policy</title>
  <style>
    body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;max-width:900px;margin:40px auto;padding:0 16px;line-height:1.6}
    pre{overflow:auto;padding:12px;border:1px solid #ddd;border-radius:10px}
    blockquote{border-left:4px solid #ddd;padding-left:12px;color:#555}
  </style>
</head>
<body>${html}</body>
</html>`);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

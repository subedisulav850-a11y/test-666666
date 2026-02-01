global.codes = global.codes || [];

export default function handler(req, res) {
  const ADMIN_PASSWORD = "Sulav";

  if (req.headers.authorization !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const code = "FF-" + Math.random().toString(36).substr(2, 8).toUpperCase();
  global.codes.push(code);

  res.json({ code });
}
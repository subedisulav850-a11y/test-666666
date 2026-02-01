export default function handler(req, res) {
  const ADMIN_PASSWORD = "Sulav";

  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    res.json({ success: true, token: ADMIN_PASSWORD });
  } else {
    res.json({ success: false });
  }
}
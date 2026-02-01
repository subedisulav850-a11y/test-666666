global.codes = global.codes || [];

export default function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.json({ valid: false });
  }

  const index = global.codes.indexOf(code);
  if (index === -1) {
    return res.json({ valid: false });
  }

  global.codes.splice(index, 1); // one-time use
  res.json({ valid: true, coins: 100 });
}
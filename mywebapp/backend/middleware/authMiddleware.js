const jwt = require('jsonwebtoken');

const JWT_SECRET = 'e518e0067813348ac9e648fcb3ea9139aca7a042f8459165edc138c027ff2b13aa7cb9d579b7f0bcc51bbf0aa9951aeac2c9431d8948c72f4967b1da54531e67';

function verifyJWT(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ error: 'Token is required' });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = decoded;
    next();
  });
}

function adminAuth(req, res, next) {
  if (req.user && req.user.isAdmin) {
    next();  // Admin is authenticated
  } else {
    res.status(403).json({ error: 'Unauthorized' });
  }
}

module.exports = { verifyJWT, adminAuth };

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { verifyJWT } = require('../middleware/authMiddleware');

// JWT secret key
const JWT_SECRET = 'e518e0067813348ac9e648fcb3ea9139aca7a042f8459165edc138c027ff2b13aa7cb9d579b7f0bcc51bbf0aa9951aeac2c9431d8948c72f4967b1da54531e67';

// Helper functions
function hashPassword(password, salt) {
  return crypto.pbkdf2Sync(password, salt, 1000, 64, `sha256`).toString(`hex`);
}

function generateSalt() {
  return crypto.randomBytes(16).toString('hex');
}

// Signup route
router.post('/signup', async (req, res) => {
  const { name, username, email, password } = req.body;
  const salt = generateSalt();
  const hashedPassword = hashPassword(password, salt);

  const existingUser = await req.usersCollection.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  const newUser = { name, username, email, hashedPassword, salt };
  await req.usersCollection.insertOne(newUser);
  res.json({ message: 'User created successfully' });
});

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await req.usersCollection.findOne({ username });

  if (!user || hashPassword(password, user.salt) !== user.hashedPassword) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Protected route (only logged-in users can access)
router.get('/profile', verifyJWT, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}!` });
});

module.exports = router;

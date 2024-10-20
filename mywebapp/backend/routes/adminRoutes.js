const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { verifyJWT, adminAuth } = require('../middleware/authMiddleware');

// JWT secret key
const JWT_SECRET = 'e518e0067813348ac9e648fcb3ea9139aca7a042f8459165edc138c027ff2b13aa7cb9d579b7f0bcc51bbf0aa9951aeac2c9431d8948c72f4967b1da54531e67key';

// Helper functions
function hashPassword(password, salt) {
  return crypto.pbkdf2Sync(password, salt, 1000, 64, `sha256`).toString(`hex`);
}

// Admin login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const admin = await req.adminCollection.findOne({ username });

  if (!admin || admin.password !== password) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: admin._id, username: admin.username, isAdmin: true }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Admin dashboard (protected)
router.get('/dashboard', verifyJWT, adminAuth, async (req, res) => {
  const users = await req.usersCollection.find().toArray();
  res.json(users);
});

// Edit user by Admin
router.put('/edit/:id', verifyJWT, adminAuth, async (req, res) => {
  const { name, username, email } = req.body;
  const userId = req.params.id;

  await req.usersCollection.updateOne(
    { _id: new ObjectId(userId) },
    { $set: { name, username, email } }
  );
  res.json({ message: 'User updated successfully' });
});

// Delete user by Admin
router.delete('/delete/:id', verifyJWT, adminAuth, async (req, res) => {
  const userId = req.params.id;
  await req.usersCollection.deleteOne({ _id: new ObjectId(userId) });
  res.json({ message: 'User deleted successfully' });
});

module.exports = router;

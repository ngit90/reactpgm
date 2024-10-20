const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const {MongoClient} = require('mongodb');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const dbConfig = require('./config/db');

const app = express();
const PORT = 5000;
let db, usersCollection, adminCollection;

// MongoDB connection
async function connectToMongoDB() {
  try {
      const client = await MongoClient.connect(dbConfig.mongoURI, {});
      db = client.db(dbConfig.dbName);
      usersCollection = db.collection('users');
      adminCollection = db.collection('admins');  // Admin collection for login
      console.log('Connected to MongoDB');
  } catch (err) {
      console.error('Failed to connect to MongoDB:', err.message);
  }
}
connectToMongoDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(session({ secret: 'secret_key', resave: false, saveUninitialized: true }));


  // Inject database into request
  app.use((req, res, next) => {
    req.usersCollection = usersCollection;
    req.adminCollection = adminCollection;
    next();
  });

  // Routes
  app.use('/api/users', userRoutes);
  app.use('/api/admin', adminRoutes);

  // Start server
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

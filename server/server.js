// server/server.js
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./src/config/db');
const app = require('./src/app');
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB(); // Wait for DB connection before starting server
    console.log('✅ MongoDB Connected: localhost');

    app.listen(PORT, () => {
      console.log(`✅ Server running at: http://localhost:${PORT}/`);
    });
  } catch (err) {
    console.error('❌ Failed to start server:', err.message);
    process.exit(1);
  }
};

startServer();




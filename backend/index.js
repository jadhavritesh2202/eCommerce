const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = require('./config/db');

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  

app.use(cors());

app.get('/', (req, res) => {
    res.send('Backend Working Properly');
});

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes.js'));
app.use('/api/payments', require('./routes/paymentRoutes.js'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/analytics', require('./routes/analyticsRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
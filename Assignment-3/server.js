require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Inventory Management API!' });
});

app.use('/api/products', productRoutes);
app.use(notFound);
app.use(errorHandler);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on :", PORT);
  });
});

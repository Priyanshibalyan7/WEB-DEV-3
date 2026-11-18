// Run this file using: npm run seed
// This will populate the MongoDB database with initial sample products
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const sampleProducts = [
  { name: 'Study Table', sku: 'FURN-TB-812', category: 'Furniture', price: 3999, quantity: 2, reorderLevel: 4, supplier: 'IKEA India' },
  { name: 'Office Chair', sku: 'FURN-CH-101', category: 'Furniture', price: 6499, quantity: 15, reorderLevel: 5, supplier: 'Godrej Interio' },
  { name: 'Laptop 15 inch', sku: 'ELEC-LP-201', category: 'Electronics', price: 52000, quantity: 8, reorderLevel: 5, supplier: 'Dell India' },
  { name: 'Wireless Mouse', sku: 'ELEC-MS-202', category: 'Electronics', price: 799, quantity: 3, reorderLevel: 10, supplier: 'Logitech' },
  { name: 'Smartphone', sku: 'ELEC-SP-203', category: 'Electronics', price: 18999, quantity: 40, reorderLevel: 10, supplier: 'Samsung' },
  { name: 'Bluetooth Speaker', sku: 'ELEC-BS-204', category: 'Electronics', price: 1499, quantity: 45, reorderLevel: 15, supplier: 'boAt' },
  { name: 'Cotton T-Shirt', sku: 'APRL-TS-301', category: 'Apparel', price: 499, quantity: 60, reorderLevel: 20, supplier: 'Raymond' },
  { name: 'Denim Jeans', sku: 'APRL-JN-302', category: 'Apparel', price: 2299, quantity: 18, reorderLevel: 20, supplier: 'Levis' },
  { name: 'Notebook A4', sku: 'STNY-NB-401', category: 'Stationery', price: 60, quantity: 200, reorderLevel: 50, supplier: 'Classmate' },
  { name: 'Ball Pen Box', sku: 'STNY-BP-402', category: 'Stationery', price: 150, quantity: 12, reorderLevel: 25, supplier: 'Cello Pens' },
  { name: 'Basmati Rice 5kg', sku: 'GROC-RC-501', category: 'Grocery', price: 650, quantity: 70, reorderLevel: 20, supplier: 'India Gate' },
  { name: 'Olive Oil 1L', sku: 'GROC-OL-502', category: 'Grocery', price: 899, quantity: 25, reorderLevel: 10, supplier: 'Figaro' },
];

const seedDatabase = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);

    console.log('Clearing old product data...');
    await Product.deleteMany();

    console.log('Inserting sample products...');
    await Product.create(sampleProducts);

    console.log(`✅ Success: Added ${sampleProducts.length} sample products to database!`);
  } catch (error) {
    console.error(`❌ Seeding failed: ${error.message}`);
  } finally {
    // Close connection
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB.');
  }
};

seedDatabase();

const Product = require('../models/Product');

exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      product,
    });
  } catch (error) {
    next(error); 
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    const { category, supplier, search, minPrice, maxPrice, inStock, sort, page, limit } = req.query;

    const filter = {};

    if (category) {
      filter.category = { $regex: category, $options: 'i' };
    }

    if (supplier) {
      filter.supplier = { $regex: supplier, $options: 'i' };
    }
    if (search) {
      filter.name = { $regex: search, $options: 'i' };
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    if (inStock === 'true') {
      filter.quantity = { $gt: 0 };
    } else if (inStock === 'false') {
      filter.quantity = 0;
    }

    let sortBy = '-createdAt';
    if (sort) {
      sortBy = sort.split(',').join(' ');
    }

    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit) || 10;
    const skip = (pageNum - 1) * limitNum;

    const total = await Product.countDocuments(filter);
    const products = await Product.find(filter)
      .sort(sortBy)
      .skip(skip)
      .limit(limitNum);

    res.status(200).json({
      success: true,
      total,
      page: pageNum,
      totalPages: Math.ceil(total / limitNum),
      count: products.length,
      products,
    });
  } catch (error) {
    next(error);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,           
      runValidators: true, 
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      product,
    });
  } catch (error) {
    next(error);
  }
};

exports.adjustStock = async (req, res, next) => {
  try {
    const { change } = req.body;

    if (typeof change !== 'number' || change === 0) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid non-zero number for 'change' (e.g., +10 to restock, -5 to sell)",
      });
    }
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }
    if (change < 0 && product.quantity + change < 0) {
      return res.status(400).json({
        success: false,
        message: `Insufficient stock! Available: ${product.quantity}, Requested: ${Math.abs(change)}`,
      });
    }
    product.quantity += change;
    await product.save();

    res.status(200).json({
      success: true,
      message: change > 0 ? 'Stock restocked successfully' : 'Stock reduced successfully',
      product,
    });
  } catch (error) {
    next(error);
  }
};
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      id: product._id,
    });
  } catch (error) {
    next(error);
  }
};

exports.getLowStock = async (req, res, next) => {
  try {
    const lowStockItems = await Product.find({
      $expr: { $lte: ['$quantity', '$reorderLevel'] },
    }).sort({ quantity: 1 });

    res.status(200).json({
      success: true,
      count: lowStockItems.length,
      lowStockItems,
    });
  } catch (error) {
    next(error);
  }
};

exports.getCategorySummary = async (req, res, next) => {
  try {
    const summary = await Product.aggregate([
      {
        $group: {
          _id: '$category',                                                   
          totalProducts: { $sum: 1 },                                         
          totalQuantity: { $sum: '$quantity' },                               
          totalInventoryValue: { $sum: { $multiply: ['$price', '$quantity'] } }, 
          averagePrice: { $avg: '$price' },                                   
        },
      },
      {
        $sort: { totalInventoryValue: -1 }, 
      },
    ]);

    res.status(200).json({
      success: true,
      categoriesCount: summary.length,
      summary,
    });
  } catch (error) {
    next(error);
  }
};

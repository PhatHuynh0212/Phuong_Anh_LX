import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const {
      pro_code,
      name,
      brand,
      category,
      type,
      description,
      sizes,
      features,
      color,
      images,
      isFeatured,
      isPublished,
    } = req.body;

    const product = new Product({
      pro_code,
      name,
      brand,
      category,
      type,
      description,
      sizes,
      features,
      color,
      images,
      isFeatured,
      isPublished,
      user: req.user._id, //Reference to admin user who create it
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error!");
  }
};

export const updateProduct = async (req, res) => {
  try {
    const {
      pro_code,
      name,
      brand,
      category,
      type,
      description,
      sizes,
      features,
      color,
      images,
      isFeatured,
      isPublished,
    } = req.body;

    //Find product by ID
    const product = await Product.findById(req.params.id);

    if (product) {
      product.pro_code = pro_code || product.pro_code;
      product.name = name || product.name;
      product.brand = brand || product.brand;
      product.category = category || product.category;
      product.type = type || product.type;
      product.description = description || product.description;
      product.sizes = sizes || product.sizes;
      product.features = features || product.features;
      product.color = color || product.color;
      product.images = images || product.images;
      product.isFeatured =
        isFeatured !== undefined ? isFeatured : product.isFeatured;
      product.isPublished =
        isPublished !== undefined ? isPublished : product.isPublished;

      // Save the update product
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error!");
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      // Remove product from DB
      await product.deleteOne();
      res.json({ message: "Product removed" });
    } else {
      res.status(404).json({ message: "Product not found!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error!");
  }
};

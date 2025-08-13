import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
import Product from "./models/Product.js";
import products from "./data/products.js";

dotenv.config();

// Connect mongoDB
mongoose.connect(process.env.MONGO_URI);

// Function to seed data
const seedData = async () => {
  try {
    // Clear all data before seed
    await Product.deleteMany();
    await User.deleteMany();

    // Create a default admin user
    const createUser = await User.create({
      name: "Admin PALX",
      email: "admin@palx.com",
      password: "02122003",
      phoneNumber: "0932654804",
      role: "admin",
    });

    // Assign the default user ID to each product
    const userID = createUser._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: userID };
    });

    // Insert products into database
    await Product.insertMany(sampleProducts);

    console.log("Product data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding data: ", error);
    process.exit(1);
  }
};

seedData();

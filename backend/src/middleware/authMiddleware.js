import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Middleware to protect routes
export const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decode.user.id).select("-password");

      next();
    } catch (error) {
      console.error("Token verified failed!", error);
      res.status(401).json({ message: "Not authorized!" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token provided!" });
  }
};

// Middleware to check user is an admin
export const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Not authorized as an admin!" });
  }
};

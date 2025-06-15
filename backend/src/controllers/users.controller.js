import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, password, phoneNumber } = req.body;

  try {
    let user = await User.findOne({
      $or: [{ email }, { phoneNumber }],
    });

    if (user) return res.status(400).json({ message: "User already exists!" });

    // Create new user
    user = new User({ name, email, password, phoneNumber });
    await user.save();

    // Create JWT Payload
    const payload = {
      user: {
        id: user._id,
        role: user.role,
      },
    };

    // Sign and return token along with user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: "10d",
      },
      (err, token) => {
        if (err) throw err;

        // Send user token
        res.status(201).json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error!");
  }
};

export const login = async (req, res) => {
  const { account, password } = req.body;

  try {
    // Tìm user theo email hoặc số điện thoại
    const user = await User.findOne({
      $or: [{ email: account }, { phoneNumber: account }],
    });

    if (!user) return res.status(400).json({ message: "Invalid credentials!" });

    const isMatch = await user.matchPassword(password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials!" });

    // Payload cho JWT
    const payload = {
      user: {
        id: user._id,
        role: user.role,
      },
    };

    // Tạo và trả JWT token
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "10d" },
      (err, token) => {
        if (err) throw err;

        res.json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error!");
  }
};

export const profile = async (req, res) => {
  res.json(req.user);
};

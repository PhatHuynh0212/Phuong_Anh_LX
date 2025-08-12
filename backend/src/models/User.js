import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, trim: true },
    email: {
      type: String,
      require: true,
      unique: true,
      trim: true,
      match: [/.+\@.+\..+/, "Enter a valid email!"],
    },
    password: { type: String, require: true, minLength: 6 },
    phoneNumber: { type: String, require: true },
    role: { type: String, enum: ["customer", "admin"], default: "customer" },
    point: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

// Password hash middleware
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Match user entered password to hash password
userSchema.methods.matchPassword = async function (enteredPass) {
  return await bcrypt.compare(enteredPass, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;

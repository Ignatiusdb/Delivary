import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    try {
      // Find user by email
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.json({ success: false, message: "User doesn't exist" });
      }
  
      // Compare the provided password with the stored hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.json({ success: false, message: "Invalid credentials" });
      }
  
      // Create a token if authentication is successful
      const token = createToken(user._id);
      return res.json({ success: true, token });
    } catch (error) {
      console.log(error);
      return res.json({ success: false, message: "Server error" });
    }
  };
  

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Check if the user already exists
      const exists = await userModel.findOne({ email });
      if (exists) {
        return res.json({ success: false, message: "User already exists" });
      }
  
      // Validate email format
      if (!validator.isEmail(email)) {
        return res.json({ success: false, message: "Please enter a valid email" });
      }
  
      // Validate password strength
      if (password.length < 8) {
        return res.json({ success: false, message: "Please enter a strong password (at least 8 characters)" });
      }
  
      // Hash the user password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create a new user
      const newUser = new userModel({
        name: name,
        email: email,
        password: hashedPassword
      });
  
      // Save the user to the database
      const user = await newUser.save();
  
      // Create a JWT token
      const token = createToken(user._id);
  
      // Return success response with the token
      res.json({ success: true, token });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error registering user" });
    }
  };
  

export { loginUser, registerUser };

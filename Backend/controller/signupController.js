import signupModel from "../models/signupModel.js";
import bcrypt from 'bcryptjs';

const SignupUser = async (req, res) => {
    try {
        const { email, name, mobile, Age, gender, password } = req.body; // Ensure this matches the frontend form fields
        const userExist = await signupModel.findOne({ email });
        
        if (userExist) {
            return res.status(400).json({ success: false, message: "Email already exists" });
        }

        const saltRounds = 10;
        const hash_password = await bcrypt.hash(password, saltRounds);

        const newUser = new signupModel({
            email,
            name,
            mobile, // Consistency with form input names
            Age,
            gender, // Correct field name
            password: hash_password
        });

        await newUser.save();

        res.status(200).json({
            success: true,
            message: 'User account created successfully',
            user: newUser, // Optional: include only necessary user details
        });

    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await signupModel.findOne({ email });

        if (!userExist) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, userExist.password);

        if (isPasswordValid) {
            res.status(200).json({ success: true, message: "Login successful" });
        } else {
            res.status(401).json({ success: false, message: "Invalid email or password" });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

export { SignupUser, loginUser };

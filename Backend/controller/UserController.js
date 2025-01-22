import userModel from "../models/Users.js";

const CreateUsers = async (req, res) => {
    try {
        const { name, Age, email, mbl } = req.body;

        const NewUser = new userModel({
            name,
            Age,
            email,
            mbl,
        });

        await NewUser.save();
        res.status(200).json({ success: true, message: 'user created successfully'});

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        if (!users) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, message: 'Users found', users });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const UpdateUsers = async (req, res) => {
    try {
        const usersId = req.params.id; // Corrected the typo here
        const updatedUser = await userModel.findByIdAndUpdate(usersId, req.body,
            { new: true });
        if (!updatedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, message: 'User updated successfully', updatedUser });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const DeleteUser = async (req, res) => {
    try {
        const usersId = req.params.id; // Corrected the typo here
        const updatedUser = await userModel.findByIdAndDelete(usersId);
        if (!updatedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, message: 'user deleted successfully'});

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export { CreateUsers, getUsers, UpdateUsers ,DeleteUser};

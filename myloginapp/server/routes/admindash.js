const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.get("/find", async (req, res) => {
	try {
		const users = await User.find();
		if (!users)
			return res.status(401).json({ message: "No users" });
		res.json(users);
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error" });
	}
});

router.get("/findone/:id", async (req, res) => {
	try {
        const userId = req.params.id;
		const user = await User.findOne({_id:userId});
		if (!user)
			return res.status(401).json({ message: "No users" });
		res.json(user);
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error" });
	}
});

router.put('/edit/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser = await User.findByIdAndDelete({_id:userId});
        res.status(200).json(Userdeleted);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
});

module.exports = router;
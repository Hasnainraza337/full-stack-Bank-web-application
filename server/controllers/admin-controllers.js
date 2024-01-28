const User = require("../models/userModel");
const Account = require("../models/accountModel");

// get all user from data base 
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select({ password: 0 })
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "Users not found" })
        }
        return res.status(200).json({ users })
    } catch (error) {
        next(error)
    }
}

// get one User
const getOneUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({ _id: id }).select({ password: 0 })
        return res.status(200).json({ user })
    } catch (error) {
        next(error)
    }
}
// delete User
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id })
        return res.status(200).json({ message: "User deleted successfully" })
    } catch (error) {
        next(error)
    }
}
// update User
const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const updateUser = req.body;
        const updateData = await User.updateOne({ _id: id }, { $set: updateUser })
        return res.status(200).json(updateData)
    } catch (error) {
        next(error)
    }
}
// get all user from data base 
const getAllAccounts = async (req, res) => {
    try {
        const accounts = await Account.find();
        if (!accounts || accounts.length === 0) {
            return res.status(404).json({ message: "Account not found" })
        }
        return res.status(200).json({ accounts })
    } catch (error) {
        next(error)
    }
}

// contact delete logic
const deleteContact = async (req, res) => {
    try {
        const id = req.params.id;
        await Account.deleteOne({ _id: id })
        return res.status(200).json({ message: "Account deleted successfully" })
    } catch (error) {
        next(error)
    }
}


module.exports = { getAllUsers, getAllAccounts, deleteUser, getOneUser, updateUser, deleteContact };
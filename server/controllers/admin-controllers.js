const User = require("../models/userModel");
const Contact = require("../models/contactModel");

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
const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "Contacts not found" })
        }
        return res.status(200).json({ contacts })
    } catch (error) {
        next(error)
    }
}

// contact delete logic
const deleteContact = async (req, res) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({ _id: id })
        return res.status(200).json({ message: "Contact deleted successfully" })
    } catch (error) {
        next(error)
    }
}


module.exports = { getAllUsers, getAllContacts, deleteUser, getOneUser, updateUser, deleteContact };
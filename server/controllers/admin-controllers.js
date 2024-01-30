const User = require("../models/userModel");
const Account = require("../models/accountModel");
const { format } = require("date-fns")
const Transaction = require("../models/transactionModel")

// get all user from data base 
const getAllUsers = async (req, res, next) => {
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
const getOneUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({ _id: id }).select({ password: 0 })
        return res.status(200).json({ user })
    } catch (error) {
        next(error)
    }
}
// delete User
const deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id })
        return res.status(200).json({ message: "User deleted successfully" })
    } catch (error) {
        next(error)
    }
}
// update User
const updateUser = async (req, res, next) => {
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
const deleteAccount = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Account.deleteOne({ _id: id })
        return res.status(200).json({ message: "Account deleted successfully" })
    } catch (error) {
        next(error)
    }
}
// update Account
const updateAccount = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedBalance = req.body;

        const existingAccount = await Account.findById(id);
        if (!existingAccount) {
            return res.status(404).json({ message: 'Account not found' });
        }

        const newBalance = existingAccount.deposit + updatedBalance.deposit;

        const updateBalance = await Account.updateOne(
            { _id: id },
            { $set: { deposit: newBalance } }
        );

        const transactionDate = new Date();
        const transactionTime = format(transactionDate, 'hh:mm:ss a');
        const formattedDateWithDay = format(transactionDate, "EEEE, dd/MM/yyyy");

        // create transactions history
        await Transaction.create({
            balance: updatedBalance.deposit,
            timestamp: transactionTime,
            accountNumber: existingAccount.accountNumber,
            transactionType: "Credit",
            transactionId: Math.random().toString(36).slice(2),
            transactionDate: formattedDateWithDay,
        })
        // existingAccount.transactions.push({
        //     balance: updatedBalance.deposit,
        //     timestamp: transactionTime,
        //     accountNumber: existingAccount.accountNumber,
        //     transactionType: "Credit",
        //     transactionId: Math.random().toString(36).slice(2),
        //     transactionDate: formattedDateWithDay,
        // });

        // await existingAccount.save();

        return res.status(200).json(updateBalance)
    } catch (error) {
        next(error)
    }
}
// update Account
const updateWithdraw = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedWithdrawBalance = req.body;

        const existingAccount = await Account.findById(id);
        if (!existingAccount) {
            return res.status(404).json({ message: 'Account not found' });
        }

        const newWithrawBalance = existingAccount.deposit - updatedWithdrawBalance.deposit;

        const withdrawBalanceUpdate = await Account.updateOne(
            { _id: id },
            { $set: { deposit: newWithrawBalance } }
        );

        const transactionDate = new Date();
        const transactionTime = format(transactionDate, 'hh:mm:ss a');
        const formattedDateWithDay = format(transactionDate, "EEEE, dd/MM/yyyy");

        await Transaction.create({
            balance: updatedWithdrawBalance.deposit,
            timestamp: transactionTime,
            accountNumber: existingAccount.accountNumber,
            transactionType: "Debit",
            transactionId: Math.random().toString(36).slice(2),
            transactionDate: formattedDateWithDay,
        })

        // existingAccount.transactions.push({
        //     balance: updatedWithdrawBalance.deposit,
        //     timestamp: transactionTime,
        //     accountNumber: existingAccount.accountNumber,
        //     transactionType: "Debit",
        //     transactionId: Math.random().toString(36).slice(2),
        //     transactionDate: formattedDateWithDay,
        // });

        // await existingAccount.save();

        return res.status(200).json(withdrawBalanceUpdate)
    } catch (error) {
        next(error)
    }
}


module.exports = { getAllUsers, getAllAccounts, updateAccount, updateWithdraw, deleteUser, getOneUser, updateUser, deleteAccount };
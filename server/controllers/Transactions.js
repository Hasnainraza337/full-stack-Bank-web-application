const Transaction = require("../models/transactionModel")

const getTransactionHistory = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        if (!transactions || transactions.length === 0) {
            return res.status(404).json({ message: "Transactions  not found" })
        }
        // console.log(transactions)
        // const transactionHistory = accounts.reduce((allTransactions, account) => {
        //     const transactions = account.transactions || [];
        //     return allTransactions.concat(transactions);
        // }, []);

        return res.status(200).json({ transactions });
    } catch (error) {
        next(error);
    }
};

module.exports = getTransactionHistory 

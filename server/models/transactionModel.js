const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    balance: {
        type: Number,
    },
    timestamp: {
        type: String,
    },
    accountNumber: {
        type: String
    },
    transactionType: {
        type: String
    },
    transactionId: {
        type: String
    },
    transactionDate: {
        type: String
    }

})

const Transaction = new mongoose.model("transactions", transactionSchema)
module.exports = Transaction;
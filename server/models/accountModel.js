const mongoose = require("mongoose");


const accountSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    idCard: {
        type: String,
        required: true,

    },
    branchCode: {
        type: Number,
        required: true,

    },
    accountType: {
        type: String,
        required: true,

    },
    deposit: {
        type: Number,
        required: true,

    },
    phone: {
        type: String,
        required: true,

    },
    formattedDate: {
        type: String
    },
    accountNumber: {
        type: String,
    },
    // transactions: [{
    //     balance: {
    //         type: Number,
    //     },
    //     timestamp: {
    //         type: String,
    //     },
    //     accountNumber: {
    //         type: String
    //     },
    //     transactionType: {
    //         type: String
    //     },
    //     transactionId: {
    //         type: String
    //     },
    //     transactionDate: {
    //         type: String
    //     }
    // }]

})

const Account = new mongoose.model("accounts", accountSchema);
module.exports = Account;

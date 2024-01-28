const Account = require("../models/accountModel");
const { format } = require("date-fns")

// contact route logic

const accountForm = async (req, res) => {
    try {
        const { fullName, idCard, branchCode, accountNumber, accountType, deposit } = req.body;
        const registrationDate = new Date();
        const formattedDate = format(registrationDate, "dd/MM/yyyy");
        await Account.create({ fullName, idCard, branchCode, accountNumber, accountType, deposit, formattedDate })
        return res.status(201).json({ messgae: "Account Added successfuly" })
    } catch (error) {
        return res.status(500).json({ messgae: "Account not added" })

    }
}


module.exports = accountForm;
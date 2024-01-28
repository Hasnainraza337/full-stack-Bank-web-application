const Account = require("../models/accountModel");
const { format } = require("date-fns")

// contact route logic

const accountForm = async (req, res) => {
    try {
        const { fullName, idCard, branchCode, accountType, phone, deposit } = req.body;
        const registrationDate = new Date();
        const formattedDate = format(registrationDate, "dd/MM/yyyy");

        let accountNumber = "PK" + Math.floor(Math.random() * 100);
        accountNumber += "FAYS";
        accountNumber += branchCode;
        accountProductType = accountType === "Current" ? "301" : "386"
        accountNumber += accountProductType
        accountNumber += "00000"
        while (accountNumber.length < 24) {
            accountNumber += Math.floor(Math.random() * 10);
        }

        await Account.create({ fullName, idCard, branchCode, accountType, phone, deposit, formattedDate, accountNumber })
        return res.status(201).json({ messgae: "Account Added successfuly" })
    } catch (error) {
        return res.status(500).json({ messgae: "Account not added" })

    }
}


module.exports = accountForm;
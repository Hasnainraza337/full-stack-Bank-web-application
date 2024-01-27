const Contact = require("../models/contactModel")

// contact route logic

const contactForm = async (req, res) => {
    try {
        const { userName, email, message } = req.body;
        await Contact.create({ userName, email, message })
        return res.status(201).json({ messgae: "message send successfuly" })
    } catch (error) {
        return res.status(500).json({ messgae: "message not delivered" })

    }
}


module.exports = contactForm;
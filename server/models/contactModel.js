const mongoose = require("mongoose");


const contactSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,

    },
    message: {
        type: String,
        required: true,

    },

})

const Contact = new mongoose.model("contacts", contactSchema);
module.exports = Contact;

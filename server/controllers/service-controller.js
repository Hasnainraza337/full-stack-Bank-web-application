// service route logoic
const Services = require("../models/serviceModel");


const services = async (req, res) => {
    try {
        const response = await Services.find();

        if (!response) {
            return res.status(404).json({ msg: "No service found" });
        }
        return res.status(200).json({ response });
    } catch (error) {
        console.log(error)
    }
}


module.exports = services;

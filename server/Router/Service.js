const express = require("express");
const router = express.Router();
const Services = require("../controllers/service-controller")



router.get("/service", Services)

module.exports = router;
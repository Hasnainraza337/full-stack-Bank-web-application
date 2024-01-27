const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/Contact-controllers");
const contactSchema = require("../validators/contactValidation")
const validate = require("../middlewares/authMiddleware")



router.post("/contact", validate(contactSchema), contactForm)



module.exports = router
const express = require("express");
const router = express.Router();
const accountForm = require("../controllers/account-controllers");
const accountSchema = require("../validators/accountValidation")
const validate = require("../middlewares/authMiddleware")



router.post("/account", validate(accountSchema), accountForm)



module.exports = router
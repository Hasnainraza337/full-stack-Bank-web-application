const express = require("express");
const adminController = require("../controllers/admin-controllers");
const getTransactionHistory = require("../controllers/Transactions");
const router = express.Router();
const authMiddleware = require("../middlewares/userMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

router.get("/users", authMiddleware, adminMiddleware, adminController.getAllUsers);
router.get("/users/:id", authMiddleware, adminMiddleware, adminController.getOneUser);
router.delete("/users/delete/:id", authMiddleware, adminMiddleware, adminController.deleteUser);
router.patch("/users/update/:id", authMiddleware, adminMiddleware, adminController.updateUser);
router.get("/accounts", authMiddleware, adminMiddleware, adminController.getAllAccounts);
router.delete("/accounts/delete/:id", authMiddleware, adminMiddleware, adminController.deleteAccount);
router.patch("/accounts/update/deposit/:id", authMiddleware, adminMiddleware, adminController.updateAccount);
router.patch("/accounts/update/withdraw/:id", authMiddleware, adminMiddleware, adminController.updateWithdraw);
router.get("/transactions", authMiddleware, adminMiddleware, getTransactionHistory)
module.exports = router;